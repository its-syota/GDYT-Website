import Sample from '../assets/Sample.png'
import '../App.css'

function ProductCard() {
    return(
        <a href="" className="product-card">
            <div className="product-card-body">
                <img src={Sample} className="product-card-img"/>
                <h3 className="product-card-title" style={{color: 'var(--link-text-color)'}}>sample</h3>
                <p className="product-card-discription" style={{color: 'var(--link-text-color)'}}>this is for placeholder</p>
                <p className="product-card-price" style={{color: 'var(--link-text-color)'}}>22.67</p>
            
            </div>

        </a>

    )
}
export default ProductCard