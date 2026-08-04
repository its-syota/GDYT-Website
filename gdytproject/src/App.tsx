import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import Shoes from './shoes'
import Tops from './Tops'
import ComingSoon from './components/ComingSoon'
import ProductCard from './components/ProductCard'
import Pants from './Pants'
import Accessories from './Accessories'

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
      <a href='' className="banner-button">
        Shop Now
      </a>
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
      <Route path="/checkout" element={<ComingSoon title="Checkout" />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
