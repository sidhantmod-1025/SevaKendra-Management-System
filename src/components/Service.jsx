function Services() {

  const services = [
    {
      icon: "🪪",
      title: "Income Certificate",
      description:
        "Apply online for your income certificate quickly and easily.",
    },

    {
      icon: "🏠",
      title: "Residence Certificate",
      description:
        "Apply for residence verification and certificate services.",
    },

    {
      icon: "👥",
      title: "Caste Certificate",
      description:
        "Submit your caste certificate application online.",
    },

    {
      icon: "👶",
      title: "Birth Certificate",
      description:
        "Apply for birth certificate registration services.",
    },

    {
      icon: "📄",
      title: "Death Certificate",
      description:
        "Apply for death certificate and related services.",
    },

    {
      icon: "🍚",
      title: "Ration Card",
      description:
        "Apply for ration card services through the portal.",
    },
  ];


  const goToApply = () => {

    document
      .getElementById("apply")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  };


  return (

    <section
      id="services"
      className="section services-section"
    >

      {/* ================= TITLE ================= */}

      <div className="section-title">

        <span>
          OUR SERVICES
        </span>

        <h2>
          Government Services
        </h2>

        <p>
          Access important citizen services from
          one simple digital platform.
        </p>

      </div>


      {/* ================= SERVICE CARDS ================= */}

      <div className="service-grid">

        {services.map((service) => (

          <div
            className="service-card"
            key={service.title}
          >

            <div className="service-icon">
              {service.icon}
            </div>


            <h3>
              {service.title}
            </h3>


            <p>
              {service.description}
            </p>


            <button
              className="service-btn"
              onClick={goToApply}
            >
              Apply Now →
            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;