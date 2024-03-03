import { Box, Fab } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Home from "../homee/Home";
import Navbar from "../navbar/Navbar";


import whatsappicon from "../../assets/img/whatsappicon.png";
     
function UserMain() {


  return (
    <>
      <Navbar />
       <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "fixed",
          top: "75vh",
          right: "2rem",
          zIndex: "100",
        }}
      >
        <Fab aria-label="add">
          <a href="https://api.whatsapp.com/send?phone=541132117480&text=Hola... Quería obtener una cotización para mi proximo sitio web!!!😁" target="new" title="WhatsApp-Link-4">
            <img class className="icon-wsp" src={whatsappicon} alt="WhatsApp" title="EpsiWeb-User-Main" />
          </a>
        </Fab>
      </Box> 
      <Home />
      <Footer />
    </>
  );
}

export default UserMain;
