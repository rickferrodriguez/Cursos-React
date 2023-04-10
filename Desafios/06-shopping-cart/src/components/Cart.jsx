// import { useContext } from 'react'
// import { CartContext } from '../context/cartContext'
import { useCart } from '../hooks/useCart'
import './Cart.css'
import { CartIcon, RemoveFromCartIcon } from './Icons'

export function Cart () {
  const { cart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor='cart'>
        <CartIcon />
      </label>
      <input type='checkbox' id='cart' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map((item) => (
              <li key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div>
                  <strong>{item.title}</strong> - ${item.price}
                </div>

                <footer>
                  <small>{item.quantity}</small>
                  <button onClick={() => addToCart(item)}>+</button>
                </footer>
              </li>
            ))
          }
        </ul>
        <button>
          <RemoveFromCartIcon />
        </button>
      </aside>
    </>
  )
}
