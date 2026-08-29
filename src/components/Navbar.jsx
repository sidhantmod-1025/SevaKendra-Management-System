import { useState } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (sectionId) => {

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  };


  const toggleTheme = () => {

    setDarkMode(!darkMode);

    document.body.classList.toggle("dark-mode");

  };


  return (

    <header className="navbar">

      {/* ================= LOGO ================= */}

      <div className="logo">

        <div className="logo-icon">
          🏛️
        </div>

        <div>

          <h2>
            Seva Kendra
          </h2>

          <p>
            Government Service Portal
          </p>

        </div>

      </div>


      {/* ================= NAV LINKS ================= */}

      <nav className="nav-links">

        <button
          onClick={() =>
            scrollToSection("home")
          }
        >
          🏠 Home
        </button>


        <button
          onClick={() =>
            scrollToSection("apply")
          }
        >
          📝 Apply
        </button>


        <button
          onClick={() =>
            scrollToSection("track")
          }
        >
          🔍 Track
        </button>


        <button
          onClick={() =>
            scrollToSection("dashboard")
          }
        >
          📊 Dashboard
        </button>


        <button
          onClick={() =>
            scrollToSection("admin")
          }
        >
          👨‍💼 Admin
        </button>

      </nav>


      {/* ================= RIGHT SIDE ================= */}

      <div className="nav-right">

        {/* Theme */}

        <button
          className="nav-icon"
          onClick={toggleTheme}
          title="Change Theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>


        {/* Notification */}

        <button
          className="nav-icon notification-icon"
          title="Notifications"
        >

          🔔

          <span className="notification-badge">
            3
          </span>

        </button>


        {/* Profile */}

        <div className="profile">

          <div className="profile-avatar">
            SK
          </div>

          <div className="profile-info">

            <strong>
              Sidhant
            </strong>

            <span>
              Citizen
            </span>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Navbar;