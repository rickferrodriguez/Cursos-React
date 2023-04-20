import { useContext } from 'react'
import { CartContext } from '../context/cart'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

function ItemCart ({ product, addToCart }) {
  return (
    <li className='bg-gray-100 rounded-[1.5rem] overflow-hidden'>
      <img
        className='aspect-video w-full'
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>Qnty: {product.quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { cart, removeFromCart, addToCart } = useContext(CartContext)
  console.log(cart)
  return (
    <section>
      <label htmlFor='cart' className='cart-button hover:scale-110'>
        <CartIcon />
      </label>
      <input type='checkbox' className='peer' id='cart' hidden />

      <aside className='peer-checked:block peer-checked:h-full fixed hidden right-0 top-0 p-6 cart w-[250px] bg-gray-800'>
        <h2>Your Cart</h2>
        <ul className='flex flex-col gap-2'>
          {cart.map((product) => (
            <ItemCart
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>
        <button onClick={removeFromCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </section>
  )
}
