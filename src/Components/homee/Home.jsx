import React,{useEffect} from "react";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Header from "../header/Header";
import MainSection from "../mainsection/MainSection";
import MidSection from "../midsection/MidSection";
import Precios from '../precios/Precios'

import Aos from 'aos'
import "aos/dist/aos.css"





function Home() {


  useEffect(() => {
     Aos.init({duration: 2000})
  
  }, []);
  return (
   <>
      <Header/>
     
     <MidSection/>
   
     <MainSection/>
     
     <AboutUs/>
     <Precios/>
     <ContactUs/>
   </>
      
     
   
  );
}

export default Home;
