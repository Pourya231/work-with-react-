import React from 'react'
import PRODUCT from './PRODUCTS.json'
import './App.css';
import Button from './../Button/Button'

import Layout from '../Layout/Layout'
import Products from '../Products/Products'
import About from '../About/About'
import Contact from '../Contact/Contact'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
          <Routes>
          
            <Route path="/" element={<Products  data={PRODUCT}/>} />
        
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
 