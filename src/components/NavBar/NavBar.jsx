import React from "react";
import "./NavBar.scss";

function Navbar() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    if (sectionId === "contactame") {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a
            href="#home"
            onClick={(event) => scrollToSection(event, "home")}
          >
            Inicio
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#proyectos"
            onClick={(event) => scrollToSection(event, "proyectos")}
          >
            Proyectos
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#contactame"
            onClick={(event) => scrollToSection(event, "contactame")}
          >
            Contáctame
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
