import { useState } from "react";

function Services() {

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: "fa-id-card",
      title: "Income Certificate",
      code: "INC-001",
      description:
        "Apply for an official income certificate required for various government schemes and services.",
    },

    {
      icon: "fa-house",
      title: "Residence Certificate",
      code: "RES-002",
      description:
        "Apply for an official residence certificate to verify your residential address.",
    },

    {
      icon: "fa-users",
      title: "Caste Certificate",
      code: "CAS-003",
      description:
        "Submit your application for caste certificate and track its verification status.",
    },

    {
      icon: "fa-baby",
      title: "Birth Certificate",
      code: "BIR-004",
      description:
        "Register and apply for an official birth certificate through the digital portal.",
    },

    {
      icon: "fa-file-lines",
      title: "Death Certificate",
      code: "DEA-005",
      description:
        "Apply for an official death certificate and manage the application online.",
    },

    {
      icon: "fa-credit-card",
      title: "Ration Card",
      code: "RAT-006",
      description:
        "Apply for ration card services and submit the required citizen documents.",
    },
  ];


  // ===============================
  // GO TO APPLY
  // ===============================

  const goToApply = (serviceName = "") => {

    const applySection =
      document.getElementById("apply");

    if (applySection) {

      applySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

    // Service select ko automatically change karna
    setTimeout(() => {

      const serviceSelect =
        document.getElementById("service");

      if (serviceSelect && serviceName) {

        serviceSelect.value = serviceName;

        serviceSelect.dispatchEvent(
          new Event("change", {
            bubbles: true,
          })
        );

      }

    }, 500);

  };


  return (

    <section
      id="services"
      className="section services-section"
    >

      {/* ================= HEADER ================= */}

      <div className="services-header">

        <div>

          <span className="section-label">
            CITIZEN SERVICES
          </span>

          <h2>
            Government Services
          </h2>

          <p className = "center">
            Access essential government services
            through our secure digital platform.
          </p>

        </div>


        <div className="service-count">

          <strong>
            06
          </strong>

          <span>
            Services Available
          </span>

        </div>

      </div>


      {/* ================= SERVICE GRID ================= */}

      <div className="service-grid">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={service.code}
          >

            {/* CARD TOP */}

            <div className="service-card-top">

              <div className="service-icon">

                <i
                  className={`fa-solid ${service.icon}`}
                ></i>

              </div>

              <span className="service-number">
                0{index + 1}
              </span>

            </div>


            {/* CONTENT */}

            <div className="service-content">

              <span className="service-code">
                {service.code}
              </span>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>


            {/* ACTIONS */}

            <div className="service-actions">

              <button
                className="details-btn"
                onClick={() =>
                  setSelectedService(service)
                }
              >
                View Details
              </button>


              <button
                className="service-btn"
                onClick={() =>
                  goToApply(service.title)
                }
              >
                Apply Now

                <i className="fa-solid fa-arrow-right"></i>

              </button>

            </div>

          </div>

        ))}

      </div>


      {/* ================= MODAL ================= */}

      {selectedService && (

        <div
          className="service-modal-overlay"
          onClick={() => setSelectedService(null)}
        >

          <div
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedService(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>


            <div className="modal-icon">

              <i
                className={`fa-solid ${selectedService.icon}`}
              ></i>

            </div>


            <span className="service-code">
              {selectedService.code}
            </span>


            <h2>
              {selectedService.title}
            </h2>


            <p>
              {selectedService.description}
            </p>


            <div className="modal-info">

              <div>

                <i className="fa-solid fa-check"></i>

                <span>
                  Online Application
                </span>

              </div>


              <div>

                <i className="fa-solid fa-check"></i>

                <span>
                  Application Tracking
                </span>

              </div>


              <div>

                <i className="fa-solid fa-check"></i>

                <span>
                  Digital Token Generation
                </span>

              </div>

            </div>


            <button
              className="primary-btn modal-apply-btn"
              onClick={() => {

                setSelectedService(null);

                goToApply(
                  selectedService.title
                );

              }}
            >
              Apply for this Service

              <i className="fa-solid fa-arrow-right"></i>

            </button>

          </div>

        </div>

      )}

    </section>

  );

}

export default Services;