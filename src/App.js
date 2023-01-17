import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Hola from './components/hola/Hola';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer.jsx/ItemListContainer';
import NavBar from './components/navbar/NavBar'

function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Hola />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:itemid" element ={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
