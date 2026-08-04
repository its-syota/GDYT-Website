import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import ProductCard from './components/ProductCard'

function Accessories(){
    return(
<>
    <div className="banner">
      <h1 style={{color:'white'}}>
    The final touch to every perfect fit.
        </h1>
      <p style={{color:'white'}}>
        Discover the details that define your style. Explore a curated collection of premium accessories, crafted to complete every look.
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
export default Accessories