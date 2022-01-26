import './Animal.css';

export default function Animal(props) {
  console.log(props);
  return (
    <div style={{ top: `${props.top}`, left: `${props.left}` }}>
      <img src={`../animals/${props.type}.svg`} alt={props.name} height={props.height} width={props.width} />
      <p>
        <span>{props.name} says:</span>
        {props.says}
      </p>
    </div>
  );
}