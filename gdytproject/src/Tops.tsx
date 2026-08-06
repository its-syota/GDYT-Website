import './App.css'
import ProductCard from './components/ProductCard'
import { topsProducts } from './data/products'
import { Link } from 'react-router-dom'

function Tops(){
    return(
<>
    <div className="banner">
      <h1 style={{color:'white'}}>
        Every outfit begins with the right top.      </h1>
      <p style={{color:'white'}}>
        Explore the latest tops making waves across the marketplace. Fresh styles, high demand, and limited availability.
      </p>
      <Link to="" className="banner-button">
        Shop Now
      </Link>
    </div>
     
     <div className="sales-content">
      {topsProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
     </div>

    </>
    )
}
export default Tops