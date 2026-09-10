import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartCount, selectCartItems, selectCartTotal } from '../redux/CartSlice.jsx'

function CartItem() {
  const items = useSelector(selectCartItems)
  const itemCount = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const [checkoutMessage, setCheckoutMessage] = useState('')

  if (items.length === 0) {
    return <main className="empty-cart page-shell"><p className="eyebrow">YOUR CART</p><h1>Your cart is waiting for a little green.</h1><p>Choose a plant to begin your collection.</p><Link className="primary-button" to="/plants">Browse Plants</Link></main>
  }

  return (
    <main className="page-shell cart-page">
      <section className="page-intro compact-intro"><p className="eyebrow">YOUR CART</p><h1>A little green headed your way.</h1></section>
      <div className="cart-layout">
        <section className="cart-items" aria-label="Shopping cart items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={`${item.name} houseplant`} width="180" height="180" />
              <div className="cart-item-details"><p className="product-category">{item.category}</p><h2>{item.name}</h2><p>Unit Price: ${item.price}</p><div className="quantity-controls"><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}>-</button><span>Quantity: {item.quantity}</span><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button></div></div>
              <div className="cart-item-total"><strong>${(item.price * item.quantity).toFixed(2)}</strong><button className="remove-button" type="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div>
            </article>
          ))}
        </section>
        <aside className="cart-summary"><p className="eyebrow">ORDER SUMMARY</p><div><span>Total items</span><strong>{itemCount}</strong></div><div><span>Total amount</span><strong>${total.toFixed(2)}</strong></div><button type="button" className="checkout-button" onClick={() => setCheckoutMessage('Coming Soon')}>Checkout</button>{checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}<Link className="continue-link" to="/plants">Continue Shopping</Link></aside>
      </div>
    </main>
  )
}

export default CartItem