import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import ProductCard from './components/ProductCard'

function pants(){
    return(
<>
    <div className="banner">
      <h1 style={{color: 'navy'}}>Pants</h1>
    </div>
    <div className="main">
      <h1 style={{color:'navy'}}>
        The perfect fit starts from the ground up.
      </h1>
      <p style={{color:'navy'}}>
        Shop the styles that are setting the trend. Premium pants, modern fits, and new arrivals that are selling fast.es.
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
export default pants