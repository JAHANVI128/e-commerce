import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Orders from './Pages/Orders';
import Product from './Components/Products/Product.jsx';
import Cart from './Pages/Cart';
import './App.css'
import Shop from './Pages/Shop.jsx';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div  className="app">
      <BrowserRouter>
   
        <Navbar />

        <Shop />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/category' element={<Category />} />
          <Route path='/category/corporate-printer' element={<Category cat="cp" />} />    {/*cat = category , cp = corporate printer */}
          <Route path='/category/mouse' element={<Category cat="mouse" />} />
          <Route path='/category/computer-accessories' element={<Category cat="ca" />} />     {/*ca = computer accessories */}
          <Route path='/category/storage-devices' element={<Category cat="sd" />} />      {/*sd = storage devices */}

          <Route path='/products' element={<Product />}>
            <Route path=':pid' element={<Product />} />    {/*pid = product id */}
          </Route>

          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
