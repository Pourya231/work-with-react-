import React from 'react'
import PRODUCT from './PRODUCTS.json'
import './App.css';

import Button from './../Button/Button'
import Header from './../Header/Header'
import Footer from '../Footer/Footer';
function App() { 
  return (
    <div className="App">
      <Header />
      <ul className='products '>
      {PRODUCT.map((item) => (
        <li>
          <h3>{item.name}</h3>
          <img src={item.image} />
          <span>{item.price}</span>
          <button>buy now  </button>
        </li>
      ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
