import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import ProductCard from './components/ProductCard'

function Tops(){
    return(
<>
    <div className="banner">
      <h1 style={{color: 'navy'}}>Tops</h1>
    </div>
    <div className="main">
      <h1 style={{color:'navy'}}>
        Every outfit begins with the right top.
      </h1>
      <p style={{color:'navy'}}>
        Explore the latest tops making waves across the marketplace. Fresh styles, high demand, and limited availability.
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
export default Tops