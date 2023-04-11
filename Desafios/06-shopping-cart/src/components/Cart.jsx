import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

function CartItem ({ id, thumbnail, title, quantity, price, addToCart }) {
  return (
    <li key={id}>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <button onClick={addToCart}>-</button>
        <small>{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map((item) => (
              <CartItem
                key={item.id}
                addToCart={() => addToCart(item)}
                {...item}
              />
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
