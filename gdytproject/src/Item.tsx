import './App.css'
import Sample from './assets/Sample.png'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'



function Item(){
    return(
        <>
        <div className="item-container">
            <img src={Sample} className="item-photo"/>
            <div className="item-description">
                <h1 className="item-h1">sample shirt</h1>

                <div className="item-sub-description">
                    <h4 className="item-h4">description</h4>
                    <p className="item-text">This product is made to wear on anyday,a perfect 
                        shirt for comfort. It's your go-to from sunrise to streetlights, 
                        whether you're hitting the gym, grabbing coffee,
                        or layering up for cooler days. 100% Cotton</p>
                </div>
                <div className="item-sub-description">
                    <h4 className="item-h4">details</h4>
                    <ul className="item-ul">
                        <li>Round neck</li>
                        <li>Product color:Black</li>
                        <li>Slim fit</li>
                        <li>100% cotton</li>
                    </ul>
                </div>

                <div className="item-sub-description">
                    <h4 className="item-h4">care</h4>
                    <ul className="item-ul">
                        <li>Do not bleach</li>
                        <li>Machine wash cold delicate cycle</li>
                        <li>Touch up with warm iron</li>
                        <li>Dry at low heat</li>
                        <li>Wash dark colors separately</li>
                    </ul>
                </div>
                <Link to="/Checkout" className="Checkout-button">checkout</Link>

            </div>
        </div>
        </>
        

    )
}

export default Item