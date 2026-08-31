import { useState } from "react";

function Track() {

  const [token, setToken] = useState("");
  const [application, setApplication] = useState(null);
  const [error, setError] = useState("");


  // =========================
  // TRACK APPLICATION
  // =========================

  const handleTrack = (e) => {

    e.preventDefault();

    const searchToken = token.trim().toUpperCase();


    if (!searchToken) {

      setError("Please enter your application token number.");

      setApplication(null);

      return;
    }


    const applications =
      JSON.parse(
        localStorage.getItem("sevaApplications")
      ) || [];


    const foundApplication =
      applications.find(
        (app) =>
          app.token &&
          app.token.toUpperCase() === searchToken
      );


    if (foundApplication) {

      setApplication(foundApplication);

      setError("");

    } else {

      setApplication(null);

      setError(
        "Application not found. Please check your token number and try again."
      );

    }

  };


  // =========================
  // CLEAR SEARCH
  // =========================

  const clearSearch = () => {

    setToken("");

    setApplication(null);

    setError("");

  };


  // =========================
  // STATUS CLASS
  // =========================

  const getStatusClass = () => {

    if (!application) return "";

    return application.status
      .toLowerCase();

  };


  return (

    <section
      id="track"
      className="section track-section"
    >


      {/* ================= TITLE ================= */}

      <div className="section-title">

        <span className="section-label">
          APPLICATION TRACKING
        </span>

        <h2>
          Track Your Application
        </h2>

        <p>
          Enter your application token number
          to view the latest status.
        </p>

      </div>



      {/* ================= SEARCH CARD ================= */}

      <div className="track-search-card">

        <div className="track-search-icon">

          <i className="fa-solid fa-magnifying-glass"></i>

        </div>


        <div className="track-search-content">

          <h3>
            Check Application Status
          </h3>

          <p>
            Enter the token number received after
            submitting your application.
          </p>


          <form
            className="track-form"
            onSubmit={handleTrack}
          >

            <div className="track-input-wrapper">

              <i className="fa-solid fa-ticket"></i>

              <input
                className="token"
                type="text"
                value={token}
                onChange={(e) =>
                  setToken(e.target.value)
                }
                placeholder="Enter token e.g. SK-0001"
              />

            </div>


            <button
              type="submit"
              className="primary-btn track-btn"
            >

              <i className="fa-solid fa-magnifying-glass"></i>

              Track Status

            </button>


            <button
              type="button"
              className="secondary-btn clear"
              onClick={clearSearch}
            >

              <i className="fa-solid fa-rotate-left"></i>

              Clear

            </button>

          </form>

        </div>

      </div>



      {/* ================= ERROR ================= */}

      {error && (

        <div className="track-error">

          <i className="fa-solid fa-circle-exclamation"></i>

          <span>
            {error}
          </span>

        </div>

      )}



      {/* ================= RESULT ================= */}

      {application && (

        <div className="track-result">


          {/* RESULT HEADER */}

          <div className="track-header">

            <div className="track-token-info">

              <span>
                APPLICATION TOKEN
              </span>

              <h2>
                {application.token}
              </h2>

            </div>


            <span
              className={`status-badge ${getStatusClass()}`}
            >

              <i
                className={
                  application.status === "Approved"
                    ? "fa-solid fa-circle-check"
                    : application.status === "Rejected"
                    ? "fa-solid fa-circle-xmark"
                    : "fa-solid fa-clock"
                }
              ></i>

              {application.status}

            </span>

          </div>



          {/* DIVIDER */}

          <div className="track-divider"></div>



          {/* APPLICATION INFORMATION */}

          <div className="track-info">


            <div className="info-item">

              <div className="info-icon">

                <i className="fa-solid fa-user"></i>

              </div>

              <div>

                <span>
                  Applicant Name
                </span>

                <strong>
                  {application.name}
                </strong>

              </div>

            </div>



            <div className="info-item">

              <div className="info-icon">

                <i className="fa-solid fa-building-columns"></i>

              </div>

              <div>

                <span>
                  Service
                </span>

                <strong>
                  {application.service}
                </strong>

              </div>

            </div>



            <div className="info-item">

              <div className="info-icon">

                <i className="fa-solid fa-phone"></i>

              </div>

              <div>

                <span>
                  Mobile Number
                </span>

                <strong>
                  {application.mobile}
                </strong>

              </div>

            </div>



            <div className="info-item">

              <div className="info-icon">

                <i className="fa-solid fa-calendar"></i>

              </div>

              <div>

                <span>
                  Application Date
                </span>

                <strong>
                  {application.date}
                </strong>

              </div>

            </div>

          </div>



          {/* ================= PROGRESS ================= */}

          <div className="progress-container">

            <div className="progress-title">

              <h3>
                Application Progress
              </h3>

              <span>
                {application.status}
              </span>

            </div>


            <div className="application-progress">


              {/* SUBMITTED */}

              <div className="progress-step completed">

                <div className="step-circle">

                  <i className="fa-solid fa-check"></i>

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



              {/* UNDER REVIEW */}

              <div
                className={
                  application.status === "Pending"
                    ? "progress-step active"
                    : application.status === "Approved"
                    ? "progress-step completed"
                    : "progress-step"
                }
              >

                <div className="step-circle">

                  {application.status === "Pending" ? (
                    <i className="fa-solid fa-clock"></i>
                  ) : application.status === "Approved" ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    "2"
                  )}

                </div>

                <span>
                  Under Review
                </span>

              </div>


              <div
                className={
                  application.status === "Approved"
                    ? "progress-line completed-line"
                    : "progress-line"
                }
              ></div>



              {/* APPROVED */}

              <div
                className={
                  application.status === "Approved"
                    ? "progress-step completed"
                    : "progress-step"
                }
              >

                <div className="step-circle">

                  {application.status === "Approved" ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    "3"
                  )}

                </div>

                <span>
                  Approved
                </span>

              </div>

            </div>

          </div>



          {/* ================= STATUS MESSAGE ================= */}

          <div
            className={`status-message ${getStatusClass()}`}
          >

            {application.status === "Pending" && (

              <>
                <i className="fa-solid fa-clock"></i>

                <div>

                  <strong>
                    Application Under Review
                  </strong>

                  <p>
                    Your application has been received
                    and is currently being reviewed by
                    the concerned department.
                  </p>

                </div>

              </>

            )}



            {application.status === "Approved" && (

              <>
                <i className="fa-solid fa-circle-check"></i>

                <div>

                  <strong>
                    Application Approved
                  </strong>

                  <p>
                    Your application has been approved
                    successfully. You can proceed with
                    the next steps.
                  </p>

                </div>

              </>

            )}



            {application.status === "Rejected" && (

              <>
                <i className="fa-solid fa-circle-xmark"></i>

                <div>

                  <strong>
                    Application Rejected
                  </strong>

                  <p>
                    Your application has been rejected.
                    Please contact your nearest Seva
                    Kendra for more information.
                  </p>

                </div>

              </>

            )}

          </div>

        </div>

      )}

    </section>

  );

}

export default Track;