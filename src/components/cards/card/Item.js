import React from 'react'
import {useState} from 'react'
import '../../../common/theme/styles.css'   
import './style.css'                


const Item = (props) => {

  const [botonActivo, setBotonActivo]= useState(false);

  const [cantidadStock, setCantidadStock] = useState(props.stock);
  
  let estadoStock = "";
  let mensaje = "";

  if(cantidadStock < 1){
    estadoStock = <span>Agotado</span> 
    mensaje = "SIN STOCK"
  }else{
    estadoStock = cantidadStock;
    mensaje = "COMPRAR"       
  }

  
  const clickCompra = () => {
    if (cantidadStock > 0) {
      setCantidadStock(cantidadStock - 1);
      props.aumentar()
    }
    if(cantidadStock <= 1 ){   
      setBotonActivo(true)  
    }
  }
  
  return (
      <div className = 'producto'>
        <h3 style={{textAlign: "center"}}>{props.nombre}</h3>
        <div className='sneakers'>        
          <img src={props.imagen} alt="nike"></img>
        </div>
        <p style={{textAlign: "center", fontSize:"14px"}}>{props.descripcion}</p>
        <h5>En stock:{estadoStock}</h5>
        <button disabled={botonActivo} onClick= {clickCompra} style={{borderRadius:"5px", cursor: "pointer"}}>{mensaje}</button>      
      </div>
  )

};

export default Item;

