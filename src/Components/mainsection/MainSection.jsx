import React,{ useEffect} from 'react'

import phone from '../../assets/img/phone.png'
import './mainsection.css'

import Aos from 'aos'
import "aos/dist/aos.css"
//import Axios from "axios";
//import { useState } from "react";

import {FormattedMessage} from 'react-intl';

function MainSection() {
 // const[list, setList]=useState([]);
    useEffect(() => {
        Aos.init({duration: 2000});
       /* Axios({url: "http://localhost/EpsiWeb/api/contact/mainsection.php"})
  .then((response)=>{
    setList(response.data.mainsection[0]);
    
  })
  .catch((error)=>{
    console.log(error);
  })*/
     
     }, [/*setList*/]);
  return (
    <>
      <section id="service">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-8 order-lg-1 mb-5 mb-lg-0"
            >
              <div className="container px-5">
                <div className="row gx-5">
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                      <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">
                      <FormattedMessage
                      id='mainsection.titulo1'
                      defaultMessage='Diseño web Responsive'
                      />
                      </h3>
                      <p className="text-muted mb-0">
                        <FormattedMessage
                        id='mainsection.parrafo1'
                        defaultMessage='Tu sitio web en cualquier dispositivo con la mejor optimización y calidad visual.'
                        />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                    <i class="bi bi-people-fill icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">
                        <FormattedMessage
                        id='mainsection.titulo2'
                        defaultMessage='Integración de Social Login'
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <FormattedMessage
                        id='mainsection.parrafo2'
                        defaultMessage='Añadimos metodos de autenticación a tu sitio web, mediante las principales redes sociales.'
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className='container'>
                <div className="row">
                  <div className="col-md-6 mb-5 mb-md-0">
                    <div className="text-center">
                    <i class="bi bi-cash-coin icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">
                        <FormattedMessage
                        id='mainsection.titulo3'
                        defaultMessage='Plataformas de pagos'
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <FormattedMessage
                        id='mainsection.parrafo3'
                        defaultMessage='Incorporamos distintos metodos de pagos, ideal para los '
                        />{" "}
                        <strong>e-commerce</strong>.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                    <i class="bi bi-graph-up icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">
                        <FormattedMessage
                        id='mainsection.titulo4'
                        defaultMessage='Posicionamiento SEO'
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <FormattedMessage
                        id='mainsection.parrafo4'
                        defaultMessage='Trabajamos con las principales reglas para poder alcanzar ese preciado primer lugar en el famoso motor de búsqueda '
                        />{" "}
                        <strong>Google</strong>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12 order-lg-0">
              <img className="phone-main img-fluid" src={phone} alt="Movil-Phone" title='EpsiWeb-Main'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection