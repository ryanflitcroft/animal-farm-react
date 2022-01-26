import './AnimalList.css';
import Animal from '../Animal/Animal.js';

export default function AnimalList(props) {
  // console.log(props);
  return (
    <>
      {props.animals.map((animal, i) => 
        <Animal key={animal.name + i} {...animal}
        />)}
    </>
  );
}