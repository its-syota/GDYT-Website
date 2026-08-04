import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import { NavLink } from 'react-router-dom'
import Sample from './assets/Sample.png'
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
                <h3>Do you have a Promo Code?</h3>
                <h3>Subtotal</h3>
            </div>

        </div>

    )
}
export default Checkout