import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return <div className={styles.barContainer}>
    <input type='text' class={styles.searchBar} placeholder='Ciudad...'></input>
    <button className={styles.searchButton} onClick={()=>props.onSearch('Valor buscado')}>Buscar</button>
  </div>
};