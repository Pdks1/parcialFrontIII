import Cabecera from './components/header/Cabecera';
import Listado from './components/cards/card/Listado.js';
import Footer from './components/footer/footer.js';

import { useState } from 'react';
import { createContext } from "react";
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App () {
  const [theme, setTheme]= useState("ligth");
  const toggleTheme = ()=>{
    setTheme((actual)=>( actual === "light" ? "dark":"light"))
  }
  const [elementosComprados, setElementosComprados] = useState(0);
  const aumentar = () => {
    setElementosComprados(elementosComprados + 1);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id= {theme}>
        <Cabecera elementosComprados = {elementosComprados} /> 
        <div className="switch">
          <p>Claro/Oscuro</p>  
          <ReactSwitch onChange ={toggleTheme} checked={theme === "dark"}/> 
        </div>
        <Listado aumentar = {aumentar} />
        <Footer /> 
    </div>
    </ThemeContext.Provider>
  )

};

export default App;
