import React,{useState} from "react";
import MensajesIngles from './../lang/en-UK.json';//Salimos y luego entramos a LANG
import MensajesEspañol from './../lang/es-AR.json';//Salimos y luego entramos a LANG

import { IntlProvider } from "react-intl";//Para encerrar la App dentro del proveedor

//Estado Global
const langContext = React.createContext();

//Proveedor para encerrar a toda la APP, provee el CONTEXTO
//Los HIJOS son propiedades que tenemos que pasarle a este componente
const LangProvider = ({children}) =>{
   const [mensajes, establecerMensajes] = useState(MensajesEspañol);
   const [locale, establecerLocale] = useState('es-AR');
   
   //Funcion para establer lenguajes
   const establecerLenguaje = (lenguaje)=>{
          switch (lenguaje){
            case 'es-AR':
                establecerMensajes(MensajesEspañol);
                establecerLocale('es-AR');
                break;
            case 'en-UK':
                establecerMensajes(MensajesIngles);
                establecerLocale('en-UK');
                break; 
            default:
                establecerMensajes(MensajesEspañol);
                establecerLocale('es-AR');
                     
          }
   }

    return(
        /*El "value" es el valor que le vamos a pasar a todos los elementos Hijo de la APP*/ 
        /*Ponemos como propiedad que sera igual a la funcion q acabamos de crear*/
        <langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
            <IntlProvider locale={locale} messages={mensajes}>{/*Ponemos el valor de los estados*/}
            {children}
            
            </IntlProvider>
        </langContext.Provider>
    );
}

export {LangProvider, langContext};
