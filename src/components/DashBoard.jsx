import { useEffect, useState } from "react";

function Dashboard() {

  const [applications, setApplications] = useState([]);


  // Load applications
  const loadApplications = () => {

    const savedApplications =
      JSON.parse(
        localStorage.getItem("sevaApplications")
      ) || [];

    setApplications(savedApplications);

  };


  // First load
  useEffect(() => {

    loadApplications();

  }, []);


  // Calculate statistics
  const totalApplications = applications.length;

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

        <span>
          OVERVIEW
        </span>

        <h2>
          Application Dashboard
        </h2>

        <p>
          View application statistics and recent
          citizen requests.
        </p>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="dashboard-grid">


        {/* TOTAL */}

        <div className="dashboard-card total-card">

          <div className="dashboard-icon">
            📋
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

          <div className="dashboard-icon">
            ✅
          </div>

          <h2>
            {approvedApplications}
          </h2>

          <p>
            Approved
          </p>

        </div>


        {/* PENDING */}

        <div className="dashboard-card pending-card">

          <div className="dashboard-icon">
            ⏳
          </div>

          <h2>
            {pendingApplications}
          </h2>

          <p>
            Pending
          </p>

        </div>


        {/* REJECTED */}

        <div className="dashboard-card rejected-card">

          <div className="dashboard-icon">
            ❌
          </div>

          <h2>
            {rejectedApplications}
          </h2>

          <p>
            Rejected
          </p>

        </div>

      </div>


      {/* ================= RECENT APPLICATIONS ================= */}

      <div className="dashboard-table-container">

        <div className="table-heading">

          <div>

            <h2>
              Recent Applications
            </h2>

            <p>
              Latest submitted applications
            </p>

          </div>


          <button
            className="refresh-btn"
            onClick={loadApplications}
          >
            🔄 Refresh
          </button>

        </div>


        {applications.length === 0 ? (

          /* EMPTY STATE */

          <div className="empty-dashboard">

            <div>
              📂
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

          /* TABLE */

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

                </tr>

              </thead>


              <tbody>

                {applications
                  .slice()
                  .reverse()
                  .slice(0, 10)
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


                      <td>

                        <span
                          className={`status-badge ${
                            application.status.toLowerCase()
                          }`}
                        >

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