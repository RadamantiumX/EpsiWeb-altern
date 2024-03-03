import React, { useState, Component, useRef } from "react";
import Politdepriv from "../politdepriv/Politdepriv";
import Tyc from "../tyc/Tyc";
import ContactImg from "../../assets/img/contactimg.png";
import axios, { Axios } from "axios";
import Reaptcha from "reaptcha";
import "./footer.css";

import EpsiLogo from "../../assets/img/logowithe.png"
import logofacebook from "../../assets/img/facebook.png"
import logoinstagram from "../../assets/img/instagram.png"
import logolinkedin from "../../assets/img/linkedin.png"

import {FormattedMessage} from 'react-intl';

const REACT_APP_SITE_KEY = "6LdvBRIjAAAAAKbYKYh1CK2oQJwQWpMCzCkfS2bI";
class Footer extends React.Component {
  state = {
    name: "",
    email: "",
    tel: "",
    message: "Quiero recibir una cotización para mi próximo sitio web...",
    verified: false,
    //list:[]
  };

  onVerify = (recaptchaResponse) => {
    this.setState({
      verified: true,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  submitForm = (e) => {
    //console.log(this.state);
    let action = document.getElementById("action");
    let formu = document.getElementById("demo-form");
    e.preventDefault();

    var request = axios({
      method: "post",
      url: "https://epsiweb.com/api/contact/index.php",
      headers: { "Content-type": "Application/json" },
      data: {
        name: this.state.name,
        email: this.state.email,
        tel: this.state.tel,
        message: this.state.message,
      },
    }).then((result) => {
      if (result) {
        action.innerHTML = `<div class='alert alert-success' role='alert'>Muchas gracias ${this.state.name} ! Estaremos respondiendo a la brevedad'</div>`;
        this.setState({
          name: "",
          email: "",
          tel: "",
        });
      } else {
        action.innerHTML =
          "<div class='alert alert-warning' role='alert'>Error al enviar</div>";
      }
    });

    console.log(request);
  };

  //Contenido de la Base de datos
  /*componentDidMount(){
  axios({url:"http://localhost/EpsiWeb/api/contact/footer.php"})
  .then((response)=>{
    this.setState({
      list:response.data.footer[0]
    })
    console.log(response.data.footer[0]);
  })
    .catch((error)=>{
      console.log(error);
    })
  
 }*/

  render() {
    const { name, email, tel, message, /*list*/} = this.state;

    return (
      <>
        <div className="bg-gradient-section">
          <footer className=" text-center " id="contact">
            <div className="container text-center   ">
              <div className="row ">
              <div
                 style={{marginTop:"3rem"}} 
                  className=" col-md-3 col-lg-5 col-xl-4 mx-auto mb-4  "
                >
                  <img className="d-flex justify-content-start" style={{width:"10rem", marginBottom:"1rem"}} src={EpsiLogo} alt=""/>

                  <p style={{ color: "#fff" }} class="text-start">
                    <FormattedMessage
                    id="footer.parrafo1"
                    defaultMessage="Empecemos a trabajar juntos en tu próximo sitio web, no dudes en contactarnos."
                    />
                  </p>
                  <hr style={{ color: "#fff" }} className="m-b4" />

                  <div className="text-center text-white font-alt ">
                    <FormattedMessage
                    id="footer.parrafo2"
                    defaultMessage="Visítanos en nuestras redes sociales"
                    />
                  </div>
                 <div style={{marginTop:"1rem"}}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100086997386336"
                    target="new"
                    title="Facebook-Link"
                  >
                       <img style={{marginRight:"1rem"}}   src={logofacebook} alt="logofacebook"/>
                  </a>
                  <a
                    href="https://www.instagram.com/epsiwebdevs/?hl=es-la"
                    target="new"
                    title="Instagram-Link"
                  >
                     <img style={{marginRight:"1rem"}}  src={logoinstagram} alt="logoinstagram"/>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/epsiwebdev/about/"
                    target="new"
                    title="Linkedin-Link"
                  >
                       <img src={logolinkedin} alt="logolinkedin"/>
                  </a>
                  </div>
                </div>
               

                <div  style={{marginTop:"3rem"}}   class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                    style={{ color: "#fff", fontSize: "2rem" }}
                    class="  text-start  card-title display-4 lh-1  "
                  >
                    <FormattedMessage
                    id="footer.contact"
                    defaultMessage="Contacto"
                    />
                  </h6>
                  <hr
                class="mb-4 mt-0   "
                style={{width:"60px", backgroundColor: "#fff", height: "2px"}}
                />
                  <p style={{ color: "#fff" }} className="text-start">
                    <i class="fa-solid fa-phone"></i>+541132117480 /
                    +5491165623938
                  </p>
                  <p className="text-start" style={{ color: "#fff" }}>
                    <i
                      style={{ marginRight: "0.4rem" }}
                      class="fa-regular fa-envelope"
                    ></i>
                    info@epsiweb.com
                  </p>
                  <div style={{marginTop:"5rem"}}>
                  <a style={{textDecoration:"none"}} class="nav-link me-lg-3 text-start text-uppercase fw-bold" href="#service" title='Service'>
                    <FormattedMessage
                    id="footer.services"
                    defaultMessage="Servicios"
                    />
                  </a>
                <a style={{textDecoration:"none"}} class="nav-link me-lg-3  text-start text-uppercase fw-bold" href="#aboutus" title='About'>
                  <FormattedMessage
                  id="footer.aboutus"
                  defaultMessage="Quienes Somos"
                  />
                </a>
                <a style={{textDecoration:"none"}} class="nav-link me-lg-3 text-start text-uppercase fw-bold" href="#precios" title='Price'>
                  <FormattedMessage
                  id="footer.price"
                  defaultMessage="Diseño web"
                  />
                </a>
                </div>
                </div>
               

                <div  style={{marginTop:"3rem"}}  className="col-md-2 col-lg-5 col-xl-4 mx-auto mb-4">
                  <h4
                    style={{ color: "#fff", fontSize: "2rem" }}
                    class="text-start  card-title display-4 lh-1  "
                  >
                    <FormattedMessage
                    id="footer.help"
                    defaultMessage="Como te ayudamos:"
                    />
                  </h4>
                  <hr
                class="mb-4 mt-0   "
                style={{width:"60px", color: "#fff", height: "2px"}}
                />

                  <form id="demo-form" onSubmit={this.submitForm}>
                    <div className="row justify-content-between">
                      <div className="form-group col-xs-12 col-sm-6 col-lg-6 flex-column d-flex">
                        <input
                          type="text"
                          name="nombre"
                          placeholder="Nombre"
                          class="form-control mb-3"
                          required
                          onChange={this.handleChange("name")}
                          value={name}
                        />
                      </div>

                      <div className="form-group col-xs-12 col-sm-6 col-lg-6 flex-column d-flex">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email: usuario@ejemplo.com"
                          class="form-control mb-3"
                          required
                          onChange={this.handleChange("email")}
                          value={email}
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      name="telefono"
                      placeholder="Teléfono"
                      class="form-control mb-3"
                      required
                      onChange={this.handleChange("tel")}
                      value={tel}
                    />
                    <label
                      for="msg"
                      class="form-label text-start lead fw-normal   mb-lg-0"
                      style={{ color: "#fff" }}
                    >
                      <FormattedMessage
                      id="footer.msg"
                      defaultMessage="Mensaje"
                      />
                    </label>
                    <textarea
                      style={{ height: "6rem" }}
                      id="msg"
                      name="mensaje"
                      cols="30"
                      rows="10"
                      class="form-control lead fw-normal text-muted mb-5 mb-lg-0"
                      required
                      onChange={this.handleChange("message")}
                      value={message}
                    ></textarea>
                    <div class="d-grid gap-2">
                      <Reaptcha
                        className="reaptcha"
                        sitekey={REACT_APP_SITE_KEY}
                        onVerify={this.onVerify}
                      />
                      <button
                        type="submit"
                        value="Send"
                        name="btn-enviar"
                        class="btn my-button mt-2 btn-block "
                        data-sitekey="6Lds0dMiAAAAAAxEhIKaGDsbqMvEkO_Gbvyjz5nK"
                        data-callback="onSubmit"
                        data-action="submit"
                        title="Mensajeria"
                        disabled={!this.state.verified}
                      >
                        <FormattedMessage
                        id="footer.btn"
                        defaultMessage="Enviar"
                        />{" "}
                      </button>
                    </div>

                    <div id="action"></div>
                  </form>
                </div>
                

               
              </div>

              <hr
                style={{ marginTop: "0.2rem", color: "#fff" }}
               
              />
            </div>

            <div style={{marginTop:"2rem"}} className="container px-5  ">
              <div className="container">
                <div className="row">
                 
                  <div style={{marginBottom:"2rem"}} className="col-12 col-sm-12 col-lg-4">
                    <div className="text-white-50 small   ">
                      <div className="">
                        &copy; EpsiWeb 2022. All Rights Reserved.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-4"></div>
                  <div className="col-12 col-sm-12 col-lg-4">
                    <div className="text-white-50 small   ">
                      <a
                        className="text-white-50"
                        style={{ textDecoration: "none", color: "#fff" }}
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        title="Terms-Cond"
                      >
                        <FormattedMessage
                        id="footer.tc"
                        defaultMessage="Términos y condiciones"
                        />
                      </a>
                      <a
                        className="text-white-50"
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          paddingLeft: "1rem",
                        }}
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropp"
                        title="Priv-Pol"
                      >
                        <FormattedMessage
                        id="footer.pp"
                        defaultMessage="Política de privacidad"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <Tyc />
          <Politdepriv />
        </div>
      </>
    );
  }
}

export default Footer;
