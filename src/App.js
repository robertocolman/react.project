import './App.css';

import Footer from './components/footer/Footer';
import Hola from './components/hola/Hola';
import ItemListContainer from './components/itemListContainer.jsx/ItemListContainer';
import NavBar from './components/navbar/NavBar'

// componente APP

function App(){
  return (
    <>
    <NavBar />
    <Hola />
    <ItemListContainer />
    <Footer />
    </>
  );
}

export default App;
