import { AppBar } from "@mui/material";
import React, { useState, useContext } from "react"; //Contexto y estado
import logoWithe from "../../assets/img/logowithe.png";
import "./navbar.css";

import espanaFlag from "../../assets/img/espanaflag.png";
import ukFlag from "../../assets/img/ukflag.png";

//Internacionalizacion
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

function Navbar() {
  const idioma = useContext(langContext); //Llamamos al contexto
  //console.log(idioma);

  const [navbarScroll, setNavbarScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <AppBar
        sx={
          navbarScroll
            ? {
                backgroundColor: "#000",
                transition: "0.3s",
                width: "100%",
              }
            : {
                backgroundColor: "#000" ? "transparent" : "#000",
                boxShadow: 0,
                transition: "0.3s",
                width: "100%",
              }
        }
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container d-flex justify-content-start navegacion">
          <a className="navbar-brand fw-bold" href="#page-top" title="Top-Page">
            <img className="logonav" src={logoWithe} alt="Logo" title="Logo" />
          </a>

          {/*Botones Internazionalizacion*/}
          <a
            className="navbar-brand fw-bold"
            onClick={() => idioma.establecerLenguaje("es-AR")}
            href="#ar"
            title="Top-Page"
          >
            <img src={espanaFlag} alt="Logo-Es" title="EspañaLogo" />
          </a>
          <a
            className="navbar-brand fw-bold"
            onClick={() => idioma.establecerLenguaje("en-UK")}
            href="#uk"
            title="Top-Page"
          >
            <img src={ukFlag} alt="Logo-Uk" title="UkLogo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className=" navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <a class="nav-link me-lg-3" href="#service" title="Service">
                  <FormattedMessage
                    id="menu.service"
                    defaultMessage="Servicios"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link me-lg-3" href="#aboutus" title="About">
                  <FormattedMessage
                    id="menu.about"
                    defaultMessage="Quienes Somos"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link me-lg-3" href="#precios" title="Price">
                  <FormattedMessage
                    id="menu.price"
                    defaultMessage="Diseño Web Precios"
                  />
                </a>
              </li>
              <li
                style={{ paddingTop: "0.3rem", marginLeft: "1rem" }}
                className="nav-item"
              >
                <a href="#contact" title="Contact">
                  <button class="my-button">
                    <i class="bi bi-chat-dots"></i>
                    <FormattedMessage
                      id="menu.contact"
                      defaultMessage="Hablemos"
                    />
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AppBar>
    </>
  );
}

export default Navbar;
