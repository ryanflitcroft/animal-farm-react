// import logo from './logo.svg';
import './App.css';
import { animals } from './data';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  // console.log(animals);
  return (
    <>
      <Header greeting= 'Hello, Welcome to Animal Farm!' />
      <Main animals={animals} />
      <Footer email= 'farmer@animalfarm.co' />
    </>
  );
}

export default App;
