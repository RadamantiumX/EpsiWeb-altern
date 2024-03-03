import React, {useContext} from 'react';//Usamos el contexto
import './App.css';
import UserMain from './Components/userMain/UserMain';
import {langContext} from './context/langContext';






function App() {
  const idioma = useContext(langContext);
  
  const queryString = window.location.search;
  console.log(queryString);
  

  //Cuando se redirije desde el servidor
  if(queryString === '?ok=send'){
    alert('Su mensaje ha sido enviado, nos contactaremos a la brevedad');
    
  }

  return (
    
    <div className="App">
     
   <UserMain/>
    </div>
    
  );
}

export default App;
