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
import ProductDisplay from './Components/ProductDisplay/ProductDisplay.jsx';
import ProductDesc from './Pages/ProductDesc.jsx';

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
          <Route path='/category/:category'  element={<ShopCategory />} />    {/*cat = category , cp = corporate printer */}

          <Route path='/product/:pid' element={<ProductDesc />}>
            
          </Route>

          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
