import './App.css'
import ProductCard from './components/ProductCard'
import { pantsProducts } from './data/products'
import { Link } from 'react-router-dom'

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
      <Link to="" className="banner-button">
        Shop Now
      </Link>
    </div>

     
     <div className="sales-content">
      {pantsProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
     </div>

    </>
    )
}
export default pants