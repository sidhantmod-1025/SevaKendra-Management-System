import { useEffect, useState } from "react";

function Admin() {

  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");


  // =========================
  // LOAD APPLICATIONS
  // =========================

  const loadApplications = () => {
  try {
    const savedApplications =
      JSON.parse(
        localStorage.getItem("sevaApplications")
      ) || [];

    setApplications(savedApplications);

    console.log("Applications refreshed:", savedApplications);

  } catch (error) {

    console.error(
      "Error loading applications:",
      error
    );

    setApplications([]);

  }
};

  // =========================
  // FIRST LOAD
  // =========================

  useEffect(() => {

    loadApplications();

  }, []);


  // =========================
  // UPDATE STATUS
  // =========================

  const updateStatus = (id, newStatus) => {

    const updatedApplications =
      applications.map((application) => {

        if (application.id === id) {

          return {
            ...application,
            status: newStatus,
          };

        }

        return application;

      });


    setApplications(updatedApplications);

    localStorage.setItem(
      "sevaApplications",
      JSON.stringify(updatedApplications)
    );

  };


  // =========================
  // SEARCH
  // =========================

  const filteredApplications =
    applications.filter((application) => {

      const searchText =
        search.toLowerCase().trim();

      return (

        application.name
          ?.toLowerCase()
          .includes(searchText) ||

        application.token
          ?.toLowerCase()
          .includes(searchText) ||

        application.service
          ?.toLowerCase()
          .includes(searchText)

      );

    });


  // =========================
  // STATISTICS
  // =========================

  const total =
    applications.length;

  const approved =
    applications.filter(
      (app) => app.status === "Approved"
    ).length;

  const pending =
    applications.filter(
      (app) => app.status === "Pending"
    ).length;

  const rejected =
    applications.filter(
      (app) => app.status === "Rejected"
    ).length;


  return (

    <section
      id="admin"
      className="section admin-section"
    >


      {/* ================= TITLE ================= */}

      <div className="section-title">

        <span className="section-label">
          ADMINISTRATION
        </span>

        <h2>
          Admin Control Panel
        </h2>

        <p>
          Review, manage and update citizen
          applications from one place.
        </p>

      </div>



      {/* ================= ADMIN STATS ================= */}

      <div className="admin-stats">


        <div className="admin-stat">

          <div className="admin-stat-icon blue-icon">

            <i className="fa-solid fa-file-lines"></i>

          </div>

          <div>

            <strong>
              {total}
            </strong>

            <span>
              Total
            </span>

          </div>

        </div>



        <div className="admin-stat">

          <div className="admin-stat-icon green-icon">

            <i className="fa-solid fa-circle-check"></i>

          </div>

          <div>

            <strong>
              {approved}
            </strong>

            <span>
              Approved
            </span>

          </div>

        </div>



        <div className="admin-stat">

          <div className="admin-stat-icon orange-icon">

            <i className="fa-solid fa-clock"></i>

          </div>

          <div>

            <strong>
              {pending}
            </strong>

            <span>
              Pending
            </span>

          </div>

        </div>



        <div className="admin-stat">

          <div className="admin-stat-icon red-icon">

            <i className="fa-solid fa-circle-xmark"></i>

          </div>

          <div>

            <strong>
              {rejected}
            </strong>

            <span>
              Rejected
            </span>

          </div>

        </div>

      </div>



      {/* ================= TOOLBAR ================= */}

      <div className="admin-toolbar">


        {/* SEARCH */}

        <div className="admin-search">

          <i className="fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search by name, token or service..."
          />

          {search && (

            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >

              <i className="fa-solid fa-xmark"></i>

            </button>

          )}

        </div>



        {/* REFRESH */}

        <button
          className="refresh-btn"
          onClick={loadApplications}
        >

          <i className="fa-solid fa-rotate"></i>

          Refresh

        </button>

      </div>



      {/* ================= TABLE ================= */}

      <div className="admin-table-container">


        {/* TABLE HEADER */}

        <div className="admin-table-header">

          <div>

            <h3>
              Application Management
            </h3>

            <p>
              {filteredApplications.length}
              {" "}application(s) found
            </p>

          </div>

          <div className="admin-secure">

            <i className="fa-solid fa-shield-halved"></i>

            Admin Access

          </div>

        </div>



        {/* ================= EMPTY ================= */}

        {filteredApplications.length === 0 ? (

          <div className="empty-dashboard">

            <div className="empty-icon">

              <i className="fa-solid fa-folder-open"></i>

            </div>

            <h3>
              No Applications Found
            </h3>

            <p>
              {search
                ? "Try searching with a different name, token or service."
                : "Applications will appear here after users submit the form."
              }
            </p>

          </div>

        ) : (


          /* ================= TABLE ================= */

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    TOKEN
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

                  <th>
                    ACTION
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredApplications
                  .slice()
                  .reverse()
                  .map((application) => (

                    <tr
                      key={application.id}
                    >


                      {/* TOKEN */}

                      <td>

                        <span className="table-token">

                          <i className="fa-solid fa-ticket"></i>

                          {application.token}

                        </span>

                      </td>



                      {/* APPLICANT */}

                      <td>

                        <div className="applicant-cell">

                          <div className="applicant-avatar">

                            {application.name
                              ?.charAt(0)
                              .toUpperCase()}

                          </div>

                          <div>

                            <strong>
                              {application.name}
                            </strong>

                            <small>
                              Citizen
                            </small>

                          </div>

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



                      {/* ACTIONS */}

                      <td>

                        <div className="admin-actions">


                          <button
                            className="approve-btn"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Approved"
                              )
                            }
                            title="Approve Application"
                          >

                            <i className="fa-solid fa-check"></i>

                          </button>



                          <button
                            className="reject-btn"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Rejected"
                              )
                            }
                            title="Reject Application"
                          >

                            <i className="fa-solid fa-xmark"></i>

                          </button>



                          <button
                            className="pending-btn"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Pending"
                              )
                            }
                            title="Set Pending"
                          >

                            <i className="fa-solid fa-clock"></i>

                          </button>

                        </div>

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

export default Admin;