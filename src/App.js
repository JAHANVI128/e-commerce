import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
// import SlideCarousel from './Components/Carousels/Carousel';
import Carousel from './Components/Carousels/Carousel';
import C1 from './Components/Assets/C1.png'
import C2 from './Components/Assets/C2.png'
import C3 from './Components/Assets/C3.png'

const images = [
  {
    src: { C1 },
    alt: 'First slide',
  },
  {
    src: { C2 },
    alt: 'Second slide',
  },
  {
    src: { C3 },
    alt: 'Third slide',
  },
];

function App() {
  return (
    <div className='navbar'>
      <BrowserRouter>
        <Navbar />

        {/* <SlideCarousel/> */}

        {/* <div className='main-page'>
          <Carousel images={images} />
        </div> */}

        <Routes>
          <Route path='/' element={<Home />} />
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
