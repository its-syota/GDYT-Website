import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import Shoes from './shoes'
import Tops from './Tops'
import ComingSoon from './components/ComingSoon'
import Checkout from './Checkout'
import ProductCard from './components/ProductCard'
import Pants from './Pants'
import Accessories from './Accessories'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    
    <div className="banner">
      <h1 style={{color:'white'}}>
        Our website brings positivity
      </h1>
      <p style={{color:'white'}}>
        This website resales,buys,collect pieces of clothing,accessiories,shoes,and collectables.
      </p>
      <Link to="" className="banner-button">
        Shop Now
      </Link>
    </div>
     
     <div className="sales-content">
      <ProductCard /> 
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
     </div>

    </>


  )
}

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/tops" element={<Tops />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
