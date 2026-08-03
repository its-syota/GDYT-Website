import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer>

            <p style={{ fontWeight: "bold"}}>, Inc. All Rights Reserved</p>
            <ul className='footer-links' >
                <li> <Link to="/">home</Link></li>
                <li> <Link to="/shoes">shoes</Link></li>
                <li> <Link to="/tops">tops</Link></li>
                <li> <Link to="/pants">pants</Link></li>
                <li> <Link to="/accessories">accessories</Link></li>
                <li> <Link to="/checkout">checkout</Link></li>            </ul>
        </footer>
    )
}
export default Footer 