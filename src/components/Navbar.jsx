import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/CartSlice.jsx'

function Navbar() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="site-header">
      <Link className="brand" to="/">Paradise <span>Nursery</span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart">
          Cart <span className="cart-icon" aria-hidden="true">&#128722;</span>
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar