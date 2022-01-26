import './Header.css';

export default function Header(props) {
  return ( 
    <>
      <header>
        <h1>{props.greeting}</h1>
      </header>
    </>
  );
}