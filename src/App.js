import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Product from './Components/Products/Product.jsx';
import Cart from './Pages/Cart';
import './App.css'
import Shop from './Pages/Shop.jsx';
import ImageSlider from './Components/Carousels/ImageSlider.js';
import images from './Components/Carousels/images.js';
import Footer from './Components/Footer/Footer.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';

function App() {

  return (
    <div  className="app">
      <BrowserRouter>
   
        <Navbar />

        {/* <ImageSlider images={images} /> */}

        {/* <Shop />  */}

        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/category' element={<ShopCategory category=""/>} />
          <Route path='/category/corporate-printer' element={<ShopCategory category="cp" />} />    {/*cat = category , cp = corporate printer */}
          <Route path='/category/mouse' element={<ShopCategory category="mouse" />} />
          <Route path='/category/computer-accessories' element={<ShopCategory category="ca" />} />     {/*ca = computer accessories */}
          <Route path='/category/storage-devices' element={<ShopCategory category="sd" />} />      {/*sd = storage devices */}

          <Route path='/products' element={<Product />}>
            <Route path=':pid' element={<Product />} />    {/*pid = product id */}
          </Route>

          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
