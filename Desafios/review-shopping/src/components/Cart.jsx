import { useContext } from 'react'
import { CartContext } from '../context/cart'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

function ItemCart ({ product }) {
  return (
    <li>
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>Qnty: {product.quantity}</small>
        <button>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { cart, removeFromCart } = useContext(CartContext)
  console.log(cart)
  return (
    <section>
      <label htmlFor='cart' className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id='cart' hidden />

      <aside className='cart'>
        <h2>Your Cart</h2>
        <ul>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
        </ul>
        <button onClick={removeFromCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </section>
  )
}
