import { useContext, useId } from 'react'
import { CartContext } from '../context/cart'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

export function Cart () {
  const { cart } = useContext(CartContext)
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
              />
              <div>
                <strong>{item.title}</strong> - $ {item.price}
              </div>

              <footer>
                <small>Qty: {item.quantity}</small>
                <button>+</button>
              </footer>
            </li>
          ))}
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
