import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import ProductCard from './components/ProductCard'

function Tops(){
    return(
<>
    <div className="banner">
      <h1 style={{color:'white'}}>
        Every outfit begins with the right top.      </h1>
      <p style={{color:'white'}}>
        Explore the latest tops making waves across the marketplace. Fresh styles, high demand, and limited availability.
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
export default Tops