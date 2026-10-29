function Home() {

  const scrollToSection = (sectionId) => {

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  };


  return (

    <>

      {/* ================= HOME ================= */}

      <section
        id="home"
        className="section home-section"
      >

        <div className="home-content">

          <span className="small-title">
            DIGITAL CITIZEN SERVICE PORTAL
          </span>


          <h1>

            Welcome to

            <span>
              Seva Kendra
            </span>

          </h1>


          <p>

            Apply for government services, generate
            tokens, track applications and manage
            your requests from one place.

          </p>


          <div className="home-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                scrollToSection("apply")
              }
            >
              📝 Apply Now
            </button>


            <button
              className="secondary-btn"
              onClick={() =>
                scrollToSection("track")
              }
            >
              🔍 Track Application
            </button>

          </div>

        </div>


        {/* ================= HOME CARD ================= */}

        <div className="home-card">

          <div className="home-card-icon">
            🏛️
          </div>


          <h2>
            Citizen Services
          </h2>


          <p>
            Fast • Simple • Digital
          </p>

        </div>

      </section>


     

    </>

  );

}

export default Home;