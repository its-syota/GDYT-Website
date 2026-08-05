import Sample from '../assets/Sample.png'
import '../App.css'
import { Link } from 'react-router-dom'

function ProductCard() {
    return(
        <Link to="/item" className="product-card">
            <div className="product-card-body">
                <img src={Sample} className="product-card-img"/>
                <h2 className="product-card-title">sample</h2>
                <p className="product-card-description" >this is for placeholder</p>
                <p className="product-card-price" >$19.99</p>
            </div>
        </Link>

    )
}
export default ProductCard