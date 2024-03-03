import React,{useEffect} from "react";



import ecommerce from "../../assets/img/ecommerce.jpeg";
import "./precio.css";
import Aos from 'aos'
import "aos/dist/aos.css"
//import { useState } from "react";
//import Axios from "axios";

import {FormattedMessage} from 'react-intl';


function Precios() {
  //const[list, setList]=useState([]);

useEffect(() => {
  Aos.init({ duration: 2000 });
  /*Axios({url: "http://localhost/EpsiWeb/api/contact/precios.php"})
  .then((response)=>{
    setList(response.data.precios[0]);
    
  })
  .catch((error)=>{
    console.log(error);
  })*/
}, [/*setList*/]);




  return (
    <>
    
      <div className="bg-light" id="precios">
        
        <div className="container container-card">
          <div className="row gx-5 justify-content-center"  data-aos="fade-right">
            <div className="col-xl-8 text-mid">
              <div className="h2 fs-1 text-black">
                <FormattedMessage
                id="precios.titulo"
                defaultMessage="Elegí el plan que mejor se adapte a tus necesidades"
                />
              </div>
              <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                <FormattedMessage
                id="precios.parrafo"
                defaultMessage="Una vez que hayas seleccionado una opción, nos pondremos en contacto."
                />
              </p>
            </div>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card card-01">
                <div className="profile-box">
                  <img
                    className="card-img-top rounded-circle"
                    src={ecommerce}
                    alt="laptop"
                    title="EpsiWeb-Price-1"
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title display-4 lh-1 mb-4 titulo-card "
                  >
                    {" "}
                    <FormattedMessage
                    id="precios.opcion1"
                    defaultMessage="Landing Page"
                    />
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ <FormattedMessage
                    id="precios.precio1"
                    defaultMessage="13.000,00"
                    />
                  </h4>
                  <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting"
                  >
                    <FormattedMessage
                    id="precios.promo1"
                    defaultMessage="Hosting gratis y"
                    />{" "}
                    <span style={{ display: "block" }}>
                      <FormattedMessage
                      id="precios.promo2"
                      defaultMessage="Dominio por 1 año"
                      />
                      </span>
                  </p>

                  <p
                    style={{ fontSize: "1rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0"
                  >
                    <FormattedMessage
                    id="precios.desc1"
                    defaultMessage="Diseño simple y estático, ideal para presentar tu marca y atraer más potenciales clientes a tu cartera de trabajo. La mejor optimización y seguridad con certificado SSL."
                    />
                  </p>

                  
                  <a href="https://api.whatsapp.com/send?phone=541132117480&text=Saludos!... Quisiera empezar mi Landing Page ▶ ...podrían darme mas detalles?🤔" target="new" title="WhatsApp-Link-1"><button style={{marginTop:"3rem"}} className="my-button">
                    <FormattedMessage
                    id="precios.btn"
                    defaultMessage="Empezar"
                  /></button></a>
                  

                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 ">
              <div className="card card-01 ">
                <div className="profile-box">
                  <img
                    className="card-img-top rounded-circle"
                    src={ecommerce}
                    alt="laptop" 
                    title="EpsiWeb-Price-2"
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title display-4 lh-1 mb-4 titulo-card "
                  >
                    {" "}
                    <FormattedMessage
                    id="precios.opcion2"
                    defaultMessage="Web Basic"
                    />
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ <FormattedMessage
                    id="precios.precio2"
                    defaultMessage="20.000,00"
                    />
                  </h4>
                  <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting"
                  >
                    <FormattedMessage
                    id="precios.promo1"
                    defaultMessage="Hosting gratis y"
                    />{" "}
                    <span style={{ display: "block" }}>
                      <FormattedMessage
                      id="precios.promo2"
                      defaultMessage="Dominio por 1 año"
                      />
                    </span>
                  </p>
                  <p
                    style={{ fontSize: "1rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0"
                  >
                   <FormattedMessage
                   id="precios.desc2"
                   defaultMessage="Sitios web para pequeñas tiendas, capacidad para 20 imágenes distribuidas en hasta 4 secciones. La mejor optimización y seguridad con certificado SSL."
                   />
                  </p>
                  <a href="https://api.whatsapp.com/send?phone=541132117480&text=Saludos!... Quisiera empezar mi Web Basic ▶ ...podrían darme mas detalles?🤔" target="new" title="WhatsApp-Link-2"><button style={{marginTop:"3rem"}} className="my-button">
                    <FormattedMessage
                    id="precios.btn"
                    defaultMessage="Empezar"
                    />
                    </button></a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card card-01">
                <div className="profile-box">
                  <img
                    className="card-img-top rounded-circle"
                    src={ecommerce}
                    alt="laptop"
                    title="EpsiWeb-Price-2"
                  />
                </div>
                <div className="card-body text-center">
                  <h4
                    style={{ fontSize: "2rem", color: "#fff" }}
                    className="card-title titulo-card display-4 lh-1 mb-4 "
                  >
                    {" "}
                    <FormattedMessage
                    id="precios.opcion3"
                    defaultMessage="E-Commerce"
                    />
                  </h4>
                  <h4
                    style={{ fontSize: "1.8rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0  pb-3 "
                  >
                    {" "}
                    AR$ <FormattedMessage
                    id="precios.precio3"
                    defaultMessage="Consultar"
                    />
                  </h4>
                  <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting"
                  >
                    <FormattedMessage
                    id="precios.promo1"
                    defaultMessage="Hosting Gratis y"
                    />{" "}
                    <span style={{ display: "block" }}>
                      <FormattedMessage
                      id="precios.promo2"
                      defaultMessage="Dominio por 1 año"
                      />
                    </span>
                  </p>
                  <p
                    style={{ fontSize: "1rem" }}
                    className="card-text lead fw-normal text-muted mb-5 mb-lg-0"
                  >
                    <FormattedMessage
                    id="precios.desc3"
                    defaultMessage="Tu tienda online más completa, variedad de secciones e imágenes, plataformas de pagos, base de datos, etc. Potencia tus ventas con el método más dinámico y profesional. La mejor optimización y seguridad con certificado SSL."
                    />
                  </p>
                  <a  href="https://api.whatsapp.com/send?phone=541132117480&text=Saludos!... Quisiera empezar mi E-Commerce ▶ ...podrían darme mas detalles?🤔" target="new" title="WhatsApp-Link-3"><button className="my-button">
                    <FormattedMessage
                    id="precios.btn"
                    defaultMessage="Empezar"
                    />
                    </button></a>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="container">
           <div className="row  justify-content-center"  >
            <div className="col-xl-6 text-mid">
            <p
                    style={{ fontSize: "1.3rem" }}
                    className="card-text mb-5 mb-lg-0 hosting h2 fs-2 text-black"
                  >
                   <FormattedMessage
                   id="precios.plus1"
                   defaultMessage="Además desarrollamos tu web a medida "
                   /><span style={{display:"flex"}} >
                    <FormattedMessage
                    id="precios.plus2"
                    defaultMessage="pedí tu cotización!!"
                    />
                    </span> 
                  </p>
             
              <p  className="lead fw-normal text-muted mb-5 mb-lg-0">
              <i  className="fa-solid fa-phone icon-feature text-gradient fs-5  ">+541132117480 / +541165623938</i>

             
              
              </p>
            </div>
          </div> 
        </div>
        </div>
       
      </div>
    
    
    </>
  );
}

export default Precios;
