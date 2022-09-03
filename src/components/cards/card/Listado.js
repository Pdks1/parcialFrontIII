import React from 'react'
import Data from '../../../assets/data/data.json'
import Item from './Item.js';

const Listado = ({aumentar}) => {   
  
  return (    
    <div className = 'container'>   
      {
       Data.map((item) =>
          <Item
            key = {item.id}
            id= {item.id}
            nombre = {item.producto.nombre}
            imagen = {item.producto.imagen}
            descripcion = {item.producto.descripcion}
            stock = {item.stock}
            aumentar = {aumentar}          
          />
        )
      }
    </div>
  )

};

export default Listado;