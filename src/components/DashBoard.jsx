import { useEffect, useState } from "react";

function Dashboard() {

  const [applications, setApplications] = useState([]);


  // =========================
  // LOAD APPLICATIONS
  // =========================

  const loadApplications = () => {

    const savedApplications =
      JSON.parse(
        localStorage.getItem("sevaApplications")
      ) || [];

    setApplications(savedApplications);

  };


  // =========================
  // FIRST LOAD
  // =========================

  useEffect(() => {

    loadApplications();

  }, []);


  // =========================
  // STATISTICS
  // =========================

  const totalApplications =
    applications.length;

  const approvedApplications =
    applications.filter(
      (app) => app.status === "Approved"
    ).length;

  const pendingApplications =
    applications.filter(
      (app) => app.status === "Pending"
    ).length;

  const rejectedApplications =
    applications.filter(
      (app) => app.status === "Rejected"
    ).length;


  return (

    <section
      id="dashboard"
      className="section dashboard-section"
    >


      {/* ================= TITLE ================= */}

      <div className="section-title">

        <span className="section-label">
          APPLICATION OVERVIEW
        </span>

        <h2>
          Application Dashboard
        </h2>

        <p>
          Monitor application statistics and
          recently submitted citizen requests.
        </p>

      </div>



      {/* ================= STATISTICS ================= */}

      <div className="dashboard-grid">


        {/* TOTAL */}

        <div className="dashboard-card total-card">

          <div className="dashboard-card-top">

            <div className="dashboard-icon">

              <i className="fa-solid fa-file-lines"></i>

            </div>

            <span className="card-label">
              ALL APPLICATIONS
            </span>

          </div>

          <h2>
            {totalApplications}
          </h2>

          <p>
            Total Applications
          </p>

        </div>



        {/* APPROVED */}

        <div className="dashboard-card approved-card">

          <div className="dashboard-card-top">

            <div className="dashboard-icon">

              <i className="fa-solid fa-circle-check"></i>

            </div>

            <span className="card-label">
              COMPLETED
            </span>

          </div>

          <h2>
            {approvedApplications}
          </h2>

          <p>
            Approved Applications
          </p>

        </div>



        {/* PENDING */}

        <div className="dashboard-card pending-card">

          <div className="dashboard-card-top">

            <div className="dashboard-icon">

              <i className="fa-solid fa-clock"></i>

            </div>

            <span className="card-label">
              IN PROGRESS
            </span>

          </div>

          <h2>
            {pendingApplications}
          </h2>

          <p>
            Pending Applications
          </p>

        </div>



        {/* REJECTED */}

        <div className="dashboard-card rejected-card">

          <div className="dashboard-card-top">

            <div className="dashboard-icon">

              <i className="fa-solid fa-circle-xmark"></i>

            </div>

            <span className="card-label">
              DECLINED
            </span>

          </div>

          <h2>
            {rejectedApplications}
          </h2>

          <p>
            Rejected Applications
          </p>

        </div>

      </div>



      {/* ================= RECENT APPLICATIONS ================= */}

      <div className="dashboard-table-container">


        {/* TABLE HEADER */}

        <div className="table-heading">

          <div className="table-heading-text">

            <div className="table-heading-icon">

              <i className="fa-solid fa-table-list"></i>

            </div>

            <div>

              <h2>
                Recent Applications
              </h2>

              <p>
                Latest citizen applications submitted
                through the portal.
              </p>

            </div>

          </div>


          <button
            className="refresh-btn"
            onClick={loadApplications}
          >

            <i className="fa-solid fa-rotate"></i>

            Refresh

          </button>

        </div>



        {/* ================= EMPTY STATE ================= */}

        {applications.length === 0 ? (

          <div className="empty-dashboard">

            <div className="empty-icon">

              <i className="fa-solid fa-folder-open"></i>

            </div>

            <h3>
              No Applications Yet
            </h3>

            <p>
              Applications submitted from the
              Apply section will appear here.
            </p>

          </div>

        ) : (


          /* ================= TABLE ================= */

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    APPLICATION TOKEN
                  </th>

                  <th>
                    APPLICANT
                  </th>

                  <th>
                    SERVICE
                  </th>

                  <th>
                    DATE
                  </th>

                  <th>
                    STATUS
                  </th>

                </tr>

              </thead>


              <tbody>

                {applications
                  .slice()
                  .reverse()
                  .slice(0, 10)
                  .map((application) => (

                    <tr key={application.id}>


                      {/* TOKEN */}

                      <td>

                        <span className="table-token">

                          <i className="fa-solid fa-ticket"></i>

                          {application.token}

                        </span>

                      </td>



                      {/* NAME */}

                      <td>

                        <div className="applicant-cell">

                          <div className="applicant-avatar">

                            {application.name
                              ?.charAt(0)
                              .toUpperCase()}

                          </div>

                          <strong>
                            {application.name}
                          </strong>

                        </div>

                      </td>



                      {/* SERVICE */}

                      <td>

                        <span className="service-name">

                          <i className="fa-solid fa-building-columns"></i>

                          {application.service}

                        </span>

                      </td>



                      {/* DATE */}

                      <td>

                        <span className="date-cell">

                          <i className="fa-regular fa-calendar"></i>

                          {application.date}

                        </span>

                      </td>



                      {/* STATUS */}

                      <td>

                        <span
                          className={`status-badge ${
                            application.status
                              ?.toLowerCase()
                          }`}
                        >

                          {application.status === "Approved" && (
                            <i className="fa-solid fa-check"></i>
                          )}

                          {application.status === "Pending" && (
                            <i className="fa-solid fa-clock"></i>
                          )}

                          {application.status === "Rejected" && (
                            <i className="fa-solid fa-xmark"></i>
                          )}

                          {application.status}

                        </span>

                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </section>

  );

}

export default Dashboard;