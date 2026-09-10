import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs.jsx'
import CartItem from './components/CartItem.jsx'
import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plants" element={<><Navbar /><ProductList /></>} />
      <Route path="/cart" element={<><Navbar /><CartItem /></>} />
    </Routes>
  )
}

function HomePage() {
  return (
    <main className="home-page">
      <div className="home-content">
        <p className="eyebrow">GROW SOMETHING GOOD</p>
        <h1>Paradise Nursery</h1>
        <p className="home-description">
          Thoughtfully grown houseplants for slower mornings, brighter rooms,
          and a little more life at home.
        </p>
        <Link className="primary-button" to="/plants">Get Started <span aria-hidden="true">-&gt;</span></Link>
      </div>
      <AboutUs />
    </main>
  )
}

export default App
