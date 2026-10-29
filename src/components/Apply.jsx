import { useState } from "react";

function Apply() {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    aadhaar: "",
    address: "",
  });

  const [token, setToken] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedService, setSubmittedService] = useState("");

  const services = [
    "Income Certificate",
    "Residence Certificate",
    "Caste Certificate",
    "Birth Certificate",
    "Death Certificate",
    "Ration Card",
  ];


  // Input change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  // Generate Token
  const generateToken = (e) => {

    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    if (!formData.service) {
      alert("Please select a service.");
      return;
    }


    // Existing applications
    const existingApplications =
      JSON.parse(localStorage.getItem("sevaApplications")) || [];


    // New token
    const newToken =
      `SK-${String(existingApplications.length + 1).padStart(4, "0")}`;


    const newApplication = {

      id: Date.now(),

      token: newToken,

      name: formData.name,

      mobile: formData.mobile,

      email: formData.email,

      service: formData.service,

      aadhaar: formData.aadhaar,

      address: formData.address,

      status: "Pending",

      date: new Date().toLocaleDateString(),

    };


    // Save application
    const updatedApplications = [
      ...existingApplications,
      newApplication,
    ];


    localStorage.setItem(
      "sevaApplications",
      JSON.stringify(updatedApplications)
    );


    // Receipt data
    setToken(newToken);

    setSubmittedName(formData.name);

    setSubmittedService(formData.service);


    // Clear form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      service: "",
      aadhaar: "",
      address: "",
    });

  };


  // New Application
  const newApplication = () => {

    setToken("");

    setSubmittedName("");

    setSubmittedService("");

  };


  return (

    <section
      id="apply"
      className="section apply-section"
    >

      <div className="section-title">

        <span>APPLICATION</span>

        <h2>Apply For Government Service</h2>

        <p>
          Submit your details to generate an application token.
        </p>

      </div>


      {!token ? (

        <form
          className="application-form"
          onSubmit={generateToken}
        >

          <div className="form-grid">


            {/* Name */}

            <div className="input-box">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

            </div>
           <br></br>

            {/* Mobile */}

            <div className="input-box">

              <label>
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                maxLength="10"
                required
              />

            </div>

           <br></br>
            {/* Email */}

            <div className="input-box">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />

            </div>
       <br></br>

            {/* Service */}

            <div className="input-box">

              <label>
                Select Service
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select a service
                </option>

                {services.map((service) => (

                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>

                ))}

              </select>

            </div>
       <br></br>

            {/* Aadhaar */}

            <div className="input-box">

              <label>
                Aadhaar Number
              </label>

              <input
                type="text"
                name="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                placeholder="Enter Aadhaar number"
                maxLength="12"
              />

            </div>
       <br></br>

            {/* Document */}

            <div className="input-box">

              <label>
                Upload Document
              </label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
              />

            </div>

          </div>

       <br></br>
          {/* Address */}

          <div className="input-box">

            <label>
              Address
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your complete address"
            />

          </div>
    

          {/* Submit */}

          <button
            type="submit"
            className="primary-btn generate-btn"
          >

            🎫 Generate Token

          </button>

        </form>


      ) : (


        /* ================= RECEIPT ================= */

        <div className="application-receipt">

          <div className="success-icon">
            ✓
          </div>

          <h2>
            Application Submitted Successfully
          </h2>

          <p>
            Your application has been registered successfully.
          </p>


          <div className="token-box">

            <span>Your Token Number</span>

            <strong>
              {token}
            </strong>

          </div>


          <div className="receipt-info">

            <div>

              <span>Name</span>

              <strong>
                {submittedName}
              </strong>

            </div>


            <div>

              <span>Service</span>

              <strong>
                {submittedService}
              </strong>

            </div>


            <div>

              <span>Status</span>

              <strong className="pending-status">
                Pending
              </strong>

            </div>

          </div>


          <div className="receipt-actions">

            <button
              className="primary-btn"
              onClick={() => window.print()}
            >
              🖨️ Print Receipt
            </button>


            <button
              className="secondary-btn"
              onClick={newApplication}
            >
              ➕ New Application
            </button>

          </div>

        </div>

      )}

    </section>

  );
}

export default Apply;