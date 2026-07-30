import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import Shoes from './shoes'
import ComingSoon from './components/ComingSoon'
import ProductCard from './components/ProductCard'
function Home() {
  return (
    <>
    <div className="banner">
      <h1 style={{color: 'navy'}}>placeholder</h1>
    </div>
    <div className="main">
      <h1 style={{color:'navy'}}>
        Our website brings positivity
      </h1>
      <p style={{color:'navy'}}>
        This website resales,buys,collect pieces of clothing,accessiories,shoes,and collectables.
      </p>
  
      
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
      <Route path="/tops" element={<ComingSoon title="Tops" />} />
      <Route path="/pants" element={<ComingSoon title="Pants" />} />
      <Route path="/accessories" element={<ComingSoon title="Accessories" />} />
      <Route path="/checkout" element={<ComingSoon title="Checkout" />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
