import './App.css'
import ProductCard from './components/ProductCard'
import { accessoriesProducts } from './data/products'
import { Link } from 'react-router-dom'

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
      <Link to="" className="banner-button">
        Shop Now
      </Link>
    </div>    
     
     <div className="sales-content">
      {accessoriesProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
     </div>

    </>
    )
}
export default Accessories