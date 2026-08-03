import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import ProductCard from './components/ProductCard'

function Accessories(){
    return(
<>
    <div className="banner">
      <h1 style={{color: 'navy'}}>Accessories</h1>
    </div>
    <div className="main">
      <h1 style={{color:'navy'}}>
    The final touch to every perfect fit.
      </h1>
      <p style={{color:'navy'}}>
        Discover the details that define your style. Explore a curated collection of premium accessories, crafted to complete every look.
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
export default Accessories