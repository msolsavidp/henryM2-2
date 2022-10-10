import React from 'react';
import s from './Card.module.css'

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (<div className={s.weatherCard}>

    <div>
      <button className={s.closeButton}onClick={onClose}>X</button>
      <h3 className={s.city}>{name}</h3>
    </div>

    <div className={s.eachCard}>
      <div>
        <h6>Max</h6>
        <br></br>
        <p>{max}</p>
      </div>
      <div>
        <h6>Min</h6>
        <br></br>
        <p>{min}</p>
      </div>
      <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt='img'/>
    </div>
  </div>
)};