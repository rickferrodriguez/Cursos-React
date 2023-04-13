import { useContext, useId } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

import { CartContext } from '../context/cartContext'

function CartItem ({ thumbnail, title, price, quantity, addToCart, reduceItemFromCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <button onClick={reduceItemFromCart}>-</button>
        <span>Qnty: {quantity}</span>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { cart, addToCart, clearCart, reduceItemFromCart } = useContext(CartContext)
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              reduceItemFromCart={() => reduceItemFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
