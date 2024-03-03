import React,{ useEffect} from 'react'
import './contactus.css'

import Aos from 'aos'
import "aos/dist/aos.css"
//import { useState } from "react";
//import Axios from "axios";

import {FormattedMessage} from 'react-intl';

function ContactUs() {
 // const[list, setList]=useState([]);
  useEffect(() => {
    Aos.init({duration: 2000});
    /*Axios({url: "http://localhost/EpsiWeb/api/contact/contactus.php"})
  .then((response)=>{
    setList(response.data.contactus[0]);
    
  })
  .catch((error)=>{
    console.log(error);
  })*/
 
 }, [/*setList*/]);
  return (
    <>
   
         <section className="cta">
         <div className='container'>
         <div className="row">
            <div className="cta-content">
                <div data-aos="fade-right" className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                    <FormattedMessage
                     id='contact.titulo'
                     defaultMessage="Mas información?"
                    />
                        <br />
                    <FormattedMessage
                    id='contact.parrafo'
                    defaultMessage="No hay problema."
                    />
                    </h2>
                    <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="#contact" title='Contact'>
                      <FormattedMessage
                      id='contact.btn'
                      defaultMessage="Contáctanos"
                      />
                    </a>
                </div>
            </div>
            </div>
            </div>
        </section>
       
    </>
  )
}

export default ContactUs