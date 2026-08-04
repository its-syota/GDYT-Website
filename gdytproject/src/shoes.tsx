import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import ProductCard from './components/ProductCard'
import { Link } from 'react-router-dom'

function Shoes(){
    return(
<>
    <div className="banner">
      <h1 style={{color:'white'}}>
        Where every pair tells a story
      </h1>
      <p style={{color:'white'}}>
        The hottest sneaker drops on the market—ranked by real demand, live bids, and what buyers want most. If it's here, it won't stay for long.
      </p>
      <Link to="" className="banner-button">
        Shop Now
      </Link>
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
export default Shoes