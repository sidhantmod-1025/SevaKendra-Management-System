import { useEffect, useState } from "react";

function Admin() {

  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  // Load applications
  const loadApplications = () => {

    const savedApplications =
      JSON.parse(
        localStorage.getItem("sevaApplications")
      ) || [];

    setApplications(savedApplications);

  };


  useEffect(() => {

    loadApplications();

  }, []);


  // Change application status
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


  // Search applications
  const filteredApplications =
    applications.filter((application) => {

      const searchText =
        search.toLowerCase();

      return (
        application.name
          .toLowerCase()
          .includes(searchText) ||

        application.token
          .toLowerCase()
          .includes(searchText) ||

        application.service
          .toLowerCase()
          .includes(searchText)
      );

    });


  return (

    <section
      id="admin"
      className="section admin-section"
    >

      {/* ================= TITLE ================= */}

      <div className="section-title">

        <span>
          ADMINISTRATION
        </span>

        <h2>
          Admin Panel
        </h2>

        <p>
          Manage and update citizen applications.
        </p>

      </div>


      {/* ================= ADMIN TOOLBAR ================= */}

      <div className="admin-toolbar">

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search by name, token or service..."
        />


        <button
          className="refresh-btn"
          onClick={loadApplications}
        >
          🔄 Refresh
        </button>

      </div>


      {/* ================= APPLICATION TABLE ================= */}

      <div className="admin-table-container">

        {filteredApplications.length === 0 ? (

          <div className="empty-dashboard">

            <div>
              📂
            </div>

            <h3>
              No Applications Found
            </h3>

            <p>
              Applications will appear here
              after users submit the form.
            </p>

          </div>

        ) : (

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    Token
                  </th>

                  <th>
                    Name
                  </th>

                  <th>
                    Service
                  </th>

                  <th>
                    Date
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredApplications
                  .slice()
                  .reverse()
                  .map((application) => (

                    <tr key={application.id}>

                      <td>

                        <strong>
                          {application.token}
                        </strong>

                      </td>


                      <td>
                        {application.name}
                      </td>


                      <td>
                        {application.service}
                      </td>


                      <td>
                        {application.date}
                      </td>


                      {/* STATUS */}

                      <td>

                        <span
                          className={`status-badge ${
                            application.status.toLowerCase()
                          }`}
                        >
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
                          >
                            ✓ Approve
                          </button>


                          <button
                            className="reject-btn"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Rejected"
                              )
                            }
                          >
                            ✕ Reject
                          </button>


                          <button
                            className="pending-btn"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Pending"
                              )
                            }
                          >
                            ⏳ Pending
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