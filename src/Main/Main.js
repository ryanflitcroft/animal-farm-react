import React from 'react';
import './Main.css';
import backgroundImg from '../background.png';
import AnimalList from '../AnimalList/AnimalList.js';


export default function Main(props) {

  return (

    <main style={{ backgroundImage: `url(${backgroundImg})` }} >
      <AnimalList animals={props.animals} />
      
    </main>
  );
}