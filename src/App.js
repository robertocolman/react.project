import './App.css';

import Hola from './components/hola/Hola';
import ItemListContainer from './components/itemListContainer.jsx/ItemListContainer';
import NavBar from './components/navbar/NavBar'

// componente APP

function App(){
  return (
    <>
    <NavBar />
    <Hola />
    <hr></hr>
    <ItemListContainer />
    </>
  );
}

export default App;
