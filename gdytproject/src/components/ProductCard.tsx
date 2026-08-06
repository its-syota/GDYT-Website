import '../App.css'
import { Link } from 'react-router-dom'

interface ProductCardProps {
    image: string
    title: string
    description: string
    price: string
}

function ProductCard({ image, title, description, price }: ProductCardProps) {
    return(
        <Link to="/item" className="product-card">
            <div className="product-card-body">
                <img src={image} className="product-card-img"/>
                <h2 className="product-card-title">{title}</h2>
                <p className="product-card-description" >{description}</p>
                <p className="product-card-price" >{price}</p>
            </div>
        </Link>

    )
}
export default ProductCard