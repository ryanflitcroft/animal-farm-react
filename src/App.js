// import logo from './logo.svg';
import './App.css';
import { animals } from './data';
import Main from './Main/Main';

function App() {
  // console.log(animals);
  return (
    <Main animals={animals} />
  );
}

export default App;
