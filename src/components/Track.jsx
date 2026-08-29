import { useState } from "react";

function Track() {

  const [token, setToken] = useState("");
  const [application, setApplication] = useState(null);
  const [error, setError] = useState("");


  const handleTrack = (e) => {

    e.preventDefault();

    const searchToken = token.trim().toUpperCase();

    if (!searchToken) {
      setError("Please enter your token number.");
      setApplication(null);
      return;
    }


    // Get applications from localStorage
    const applications =
      JSON.parse(
        localStorage.getItem("sevaApplications")
      ) || [];


    // Find application
    const foundApplication =
      applications.find(
        (app) =>
          app.token.toUpperCase() === searchToken
      );


    if (foundApplication) {

      setApplication(foundApplication);

      setError("");

    } else {

      setApplication(null);

      setError(
        "Application not found. Please check your token number."
      );

    }

  };


  const clearSearch = () => {

    setToken("");

    setApplication(null);

    setError("");

  };


  return (

    <section
      id="track"
      className="section track-section"
    >

      {/* ================= TITLE ================= */}

      <div className="section-title">

        <span>
          APPLICATION TRACKING
        </span>

        <h2>
          Track Your Application
        </h2>

        <p>
          Enter your token number to check your
          application status.
        </p>

      </div>


      {/* ================= SEARCH ================= */}

      <form
        className="track-form"
        onSubmit={handleTrack}
      >

        <input
          className="token"
          type="text "
          value={token}
          onChange={(e) =>
            setToken(e.target.value)
          }
          placeholder="Enter Token Number e.g. SK-0001"
        />
<br></br>
<br></br>
        <button
          type="submit"
          className="primary-btn"
        >
          🔍 Track Status
        </button>


        <button
          type="button"
          className="secondary-btn clear"
          onClick={clearSearch}
        >
          Clear
        </button>

      </form>


      {/* ================= ERROR ================= */}

      {error && (

        <div className="track-error">

          ⚠️ {error}

        </div>

      )}


      {/* ================= RESULT ================= */}

      {application && (

        <div className="track-result">

          <div className="track-header">

            <div>

              <span>
                Application Token
              </span>

              <h2>
                {application.token}
              </h2>

            </div>


            <span
              className={`status-badge ${
                application.status
                  .toLowerCase()
              }`}
            >
              {application.status}
            </span>

          </div>


          {/* Application Information */}

          <div className="track-info">

            <div className="info-item">

              <span>
                Applicant Name
              </span>

              <strong>
                {application.name}
              </strong>

            </div>


            <div className="info-item">

              <span>
                Service
              </span>

              <strong>
                {application.service}
              </strong>

            </div>


            <div className="info-item">

              <span>
                Mobile Number
              </span>

              <strong>
                {application.mobile}
              </strong>

            </div>


            <div className="info-item">

              <span>
                Application Date
              </span>

              <strong>
                {application.date}
              </strong>

            </div>

          </div>


          {/* ================= PROGRESS ================= */}

          <div className="application-progress">

            <div className="progress-step completed">

              <div className="step-circle">
                ✓
              </div>

              <span>
                Submitted
              </span>

            </div>


            <div
              className={
                application.status === "Pending"
                  ? "progress-line"
                  : "progress-line completed-line"
              }
            ></div>


            <div
              className={
                application.status === "Pending"
                  ? "progress-step active"
                  : "progress-step completed"
              }
            >

              <div className="step-circle">

                {application.status === "Pending"
                  ? "2"
                  : "✓"}

              </div>

              <span>
                Under Review
              </span>

            </div>


            <div className="progress-line"></div>


            <div
              className={
                application.status === "Approved"
                  ? "progress-step completed"
                  : "progress-step"
              }
            >

              <div className="step-circle">

                {application.status === "Approved"
                  ? "✓"
                  : "3"}

              </div>

              <span>
                Approved
              </span>

            </div>

          </div>


          {/* ================= STATUS MESSAGE ================= */}

          <div className="status-message">

            {application.status === "Pending" && (

              <>
                ⏳ Your application is currently
                under review.
              </>

            )}


            {application.status === "Approved" && (

              <>
                ✅ Your application has been
                approved successfully.
              </>

            )}


            {application.status === "Rejected" && (

              <>
                ❌ Your application has been rejected.
                Please contact Seva Kendra.
              </>

            )}

          </div>

        </div>

      )}

    </section>

  );
}

export default Track;