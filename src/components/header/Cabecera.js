import React from 'react'

const Cabecera = (props)=> {

  return (
    <header style={{backgroundColor:"gray"}}>  
      <div>  
        <h1 style={{fontSize:"30px"}}>Carrito de Compras</h1>
        <p> Cantidad de productos 
          <span style={{marginLeft:"10px", fontSize:"20px"}}>{props.elementosComprados}</span>
        </p>          
      </div>
    </header>
  )
  
};

export default Cabecera;