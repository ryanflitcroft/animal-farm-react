import React from 'react';
import './Main.css';
import backgroundImg from '../background.png';
import { animals } from '../data';

export default function Main(props) {

  return (

    <main style={{ backgroundImage: `url(${backgroundImg})` }} >
      {console.log(props)}

    {props.animals.map((animal, i) => 
      <AnimalList key={animals.name + i}
      name={animals.name}
    />)}
    </main>
  );
}