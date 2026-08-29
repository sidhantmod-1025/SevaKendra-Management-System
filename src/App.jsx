import { useState } from "react";
import Apply from "./components/Apply";
import Track from "./components/Track";
import Dashboard from "./components/DashBoard";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Service from "./components/Service";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <Navbar />


      {/* ================= HOME ================= */}

     <Home />

      {/* ================= SERVICES ================= */}
        <Service/>


      {/* ================= APPLY ================= */}

      <Apply />


      {/* ================= TRACK ================= */}
      <Track />


      {/* ================= DASHBOARD ================= */}
          <Dashboard />

      

      {/* ================= ADMIN ================= */}
         <Admin />
      
      {/* ================= FOOTER ================= */}

      <footer>

        <h3>🏛️ Seva Kendra Management System</h3>

        <p>
          Digital Citizen Service Portal
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>
  );
}

export default App;