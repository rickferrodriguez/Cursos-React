import { useContext } from 'react'
import { CartContext } from '../context/cart'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

function ItemCart ({ product, addToCart }) {
  return (
    <li className='rounded text-gray-100 font-semibold overflow-hidden border-b p-1 border-b-gray-500 flex items-center gap-2'>
      <img
        className='aspect-square w-11'
        src={product.thumbnail}
        alt={product.title}
      />
      <div className='w-[125px] truncate overflow-hidden'>
        <strong>{product.title}</strong>
        <p>${product.price}</p>
      </div>
      <footer className='flex gap-2 justify-center items-center'>
        <small>Qnty: {product.quantity}</small>
        <button className='py-1 px-2 border border-gray-100' onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { cart, clearCart, addToCart } = useContext(CartContext)
  return (
    <section>
      <label htmlFor='cart' className='cart-button hover:scale-110'>
        <CartIcon />
      </label>
      <input type='checkbox' className='peer' id='cart' hidden />

      <aside className='text-gray-100 peer-checked:block peer-checked:h-full fixed hidden right-0 top-0 px-2 py-10 cart w-[280px] bg-gray-800 z-10 rounded'>
        <h2 className='text-2xl font-bold text-center mb-3'>Your Cart</h2>
        <ul className='flex flex-col gap-2 mb-3'>
          {cart.map((product) => (
            <ItemCart
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>
        {cart.length > 0
          ? (
            <button
              className='cursor-pointer hover:bg-blue-950 flex gap-1 bg-slate-900 p-2 rounded border border-gray-200 font-bold'
              onClick={clearCart}
            >
              <span>Clear Cart</span>
              <ClearCartIcon />
            </button>
            )
          : null}
      </aside>
    </section>
  )
}
