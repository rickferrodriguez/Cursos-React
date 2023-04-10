import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import './Cart.css'
import { CartIcon } from './Icons'

export function Cart () {
  const { cart, addToCart } = useContext(CartContext)
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
      </aside>
    </>
  )
}
