import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import Shoes from './shoes'
import Tops from './Tops'
import Checkout from './Checkout'
import Pants from './Pants'
import Accessories from './Accessories'
import Item from './Item'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    
    <div className="banner">
      <h1 style={{color:'white'}}>
        GDYT Retail Website
      </h1>
      <p style={{color:'white'}}>
        This website brings positivity by allowing the community to resale, buy and collect pieces of clothing, accessiories, shoes, and collectables.
      </p>
      <Link to="/Shoes" className="banner-button">
        Shop Now
      </Link>
    </div>
     
     <div className="sales-content">
      <h1 className="about-us-h1">About us</h1>
      <p className="about-us-p">
        The GDYT Program is a program that aims to teach new skills to Detroit Youth. This has been a wonderful experience primarily because of the hard work and dedication of the interns I had the pleasure of working with.
        - Jordan
        <br></br>
        <br></br>
        Gdyt is a program where you can create amazing memories, make wonderfull new friends and bond over new skills your learning through the six week course.
        -Tae
        <br></br>
        <br></br>
        GDYT is  program where you can come in knowing nothing and leave with alot of new skills and information. I am thankful I got this opportunity to be able to learn code. 
        -Kyle
        <br></br>
        <br></br>
        I learned a lot of css and react. If i want to make my own website i'll have this to go off of 
        - Jayden
      </p>
     </div>

    </>


  )
}

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/tops" element={<Tops />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/item" element={<Item />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
