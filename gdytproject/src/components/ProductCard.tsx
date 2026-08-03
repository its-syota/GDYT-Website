import Sample from '../assets/Sample.png'
import '../App.css'

function ProductCard() {
    return(
        <a href="" className="product-card">
            <div className="product-card-body">
                <img src={Sample} className="product-card-img"/>
                <h3 className="product-card-title">sample</h3>
                <p className="product-card-description" >this is for placeholder</p>
                <p className="product-card-price" >19.99</p>
            </div>
        </a>

    )
}
export default ProductCard