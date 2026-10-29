import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

const toggleTheme = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle("dark-mode");
};


  const scrollToSection = (sectionId) => {

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    // Mobile menu close
    setMenuOpen(false);

  };


  return (

    <header className="navbar">

      {/* ================= LOGO ================= */}

      <div
        className="logo"
        onClick={() => scrollToSection("home")}
      >

        <i className="fa-solid fa-building-columns"></i>

        <div>

          <h2>Seva Kendra</h2>

          <p>Government Service Portal</p>

        </div>

      </div>


      {/* ================= DESKTOP NAV ================= */}

      <ul
        className={`nav-links ${
          menuOpen ? "mobile-open" : ""
        }`}
      >

        <li>
          <button
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("apply")}
          >
            Apply
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("track")}
          >
            Track
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("dashboard")}
          >
            Dashboard
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("admin")}
          >
            Admin
          </button>
        </li>

      </ul>


      {/* ================= RIGHT SIDE ================= */}

      <div className="nav-right">
         <button
  className="theme-btn"
  title="Toggle Theme"
  onClick={toggleTheme}
>
  <i
    className={
      darkMode
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon"
    }
  ></i>
</button>
        


        <button
          className="notification-btn"
          title="Notifications"
        >
          <i className="fa-solid fa-bell"></i>

          <span className="badge">
            3
          </span>

        </button>


        {/* ================= HAMBURGER ================= */}

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
        >

          <i
            className={
              menuOpen
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars"
            }
          ></i>

        </button>
       

      </div>

    </header>

  );

}

export default Navbar;