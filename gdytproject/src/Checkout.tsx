import './App.css'
import Sample from './assets/Sample.png'
import { Link } from 'react-router-dom'

function Checkout(){
    return(
        <div className="Checkout-container">
            <h1 className="Checkout-h1">Your Bag (1 item)</h1>
            <h4>Items in your bag are not reserved — check out now to make them yours.</h4>
            <div className="Checkout-card-body">
                <img src={Sample} className="Checkout-card-img"/>
                <div className="Checkout-info" >
                <h2 className="Checkout-card-title">sample</h2>
                <p className="Checkout-card-description" >this is for placeholder</p>
                <p className="Checkout-card-price" >$19.99</p>

                </div>
            </div>
            <div className="info-container">
                <h3>Summary</h3>
                <ul className='item-ul'>
                    <li>Sample item (x1)</li>
                </ul>
                <h3>Promo Code</h3>
                <input type="text" id="promo" name="promo" placeholder='enter promo code' className="promo-button"/>
                <h3>Subtotal</h3>
                <Link to="" className="Checkout-button">Checkout</Link>
            </div>

        </div>

    )
}
export default Checkout