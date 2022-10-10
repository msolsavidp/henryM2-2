import React from 'react';
import cities from '../data';
import Card from './Card'
import s from './Cards.module.css'


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const cardCities = cities.map((city, i)=>{ 
    return <Card
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
            key = {i}
          />
    })
  
    return (<div className={s.allCards}>
      {cardCities}
      </div>)
  };