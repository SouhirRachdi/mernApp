import React from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Register from './components/Register';
import Product from './components/Product';
import Cart from './components/Cart';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
     <Route path="/" element={ <Register /> }/>
     <Route  path="/product" element={<Product/>}/>
     <Route  path="/order" element={<Cart />}/>
     
     
  </Routes>
    </div>
  );
}

export default App;
