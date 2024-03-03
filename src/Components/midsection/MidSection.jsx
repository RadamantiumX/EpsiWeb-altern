import React,{ useEffect } from 'react'
import logowithe from '../../assets/img/logowithe.png'
import './midsection.css'

import Aos from 'aos'
import "aos/dist/aos.css"
//import Axios from "axios";
//import { useState } from "react";

import {FormattedMessage} from 'react-intl';


function MidSection() {

 // const[list, setList]=useState([]);
  
  useEffect(() => {
    Aos.init({duration: 2000});
    /*Axios({url: "http://localhost/EpsiWeb/api/contact/midsection.php"})
    .then((response)=>{
      setList(response.data.midsection[0]);
      
    })
    .catch((error)=>{
      console.log(error);
    })*/
 
 }, [/*setList*/]);
  return (
    <>
      <div className='mid-section'>
      <aside className="text-center bg-gradient-primary-to-secondary">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xl-8 text-mid">
                        <div data-aos="fade-right" className="h2 fs-1 text-white mb-4 ">
                        <FormattedMessage
                        id='midsection.parrafo'
                        defaultMessage='“Nuestro compromiso es poder acompañarte y transformar tus ideas en algo maravilloso y dinámico”.'
                        />
                        </div>
                        <img className='logomid' src={logowithe} alt="EpsiWeb-Logo"  title='EpsiWeb-Mid'/>
                    </div>
                </div>
            </div>
        </aside>
      </div>
       
    </>
  )
}

export default MidSection