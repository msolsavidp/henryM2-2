import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  // let alerta = props.onSearch('Sol')
  const barraYboton = <>< input type="text" placeholder="Ciudad" />
<button onClick = {()=>{props.onSearch('Sol')}}>Agregar</button></> //{(ciudad) => alert(ciudad)}
  
  return (<div>
    {barraYboton}
  </div>)
};