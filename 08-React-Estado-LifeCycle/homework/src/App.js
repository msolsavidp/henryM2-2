import React, { useState } from 'react';
import './App.css';
import Nav from'./components/Nav';
import Cards from './components/Cards';


export default function App() {
//Destructuring en dos elementos y como quiero que lo que reciba como primer parámetro sea un array inicializo el hook como un array vacío. Inicializo el estado. Luego a través de setCities voy a poder modificar el estedo

//setState =
    const [cities, setCities] = useState([]);
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    //Transformo la respuesta de la API en un json para poder rtabajar
      .then(r => r.json())
      //Una vez que tengo el json ya puedo trabajar con la información que contiene
      .then((weather) => {
        if(weather.main !== undefined){
          const ciudad = {
            min: Math.round(weather.main.temp_min),
            max: Math.round(weather.main.temp_max),
            img: weather.weather[0].icon,
            id: weather.id,
            wind: weather.wind.speed,
            temp: weather.main.temp,
            name: weather.name,
            weather: weather.weather[0].main,
            clouds: weather.clouds.all,
            latitud: weather.coord.lat,
            longitud: weather.coord.lon
          };
          //Con esta parte modifico el estado, esta es la estructura habitual presentada por React para cambiar un estado
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
}

  function onClose(id) {
  setCities(oldCities => oldCities.filter(c => c.id != id));
}


  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}

  // function onSearch(ciudad) {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
//       .then(r => r.json())
//       .then((recurso) => {
//         if(recurso.main !== undefined){
//           const ciudad = {
//             min: Math.round(recurso.main.temp_min),
//             max: Math.round(recurso.main.temp_max),
//             img: recurso.weather[0].icon,
//             id: recurso.id,
//             wind: recurso.wind.speed,
//             temp: recurso.main.temp,
//             name: recurso.name,
//             weather: recurso.weather[0].main,
//             clouds: recurso.clouds.all,
//             latitud: recurso.coord.lat,
//             longitud: recurso.coord.lon
//           };
//           setCities(oldCities => [...oldCities, ciudad]);
//         } else {
//           alert("Ciudad no encontrada");
//         }
//       });
// }

// function onClose(id) {
//   setCities(oldCities => oldCities.filter(c => c.id != id));
// }


