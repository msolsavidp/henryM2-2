import React, { useState } from "react";


export default function SearchBar({onSearch}) {
  //Configuramos un estado local
  const [city, setCity]= useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      //para limpiar el input
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value = {city}
        //evento que registra cambios 
        onChange = {e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
