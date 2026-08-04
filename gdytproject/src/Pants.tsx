import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import ProductCard from './components/ProductCard'

function pants(){
    return(
<>
    <div className="banner">
      <h1 style={{color:'white'}}>
        The perfect fit starts from the ground up.
        </h1>
      <p style={{color:'white'}}>
        Shop the styles that are setting the trend. Premium pants, modern fits, and new arrivals that are selling fast.es.
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
export default pants