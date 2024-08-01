import React from 'react'
import PRODUCT from './PRODUCTS.json'
import './App.css';

import Button from './../Button/Button'
import Header from './../Header/Header'
import Footer from '../Footer/Footer';
import Products from '../Products/Products'
function App() { 
  return (
    <div className="App">
      <Header />
      <Products data={PRODUCT}/>
      <Footer />
    </div>
  );
}

export default App;
 