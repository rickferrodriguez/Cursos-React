import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { CartIcon } from './Icons'

export function ItemCart ({ product, addToCart }) {
  return (
    <li className='border-b-2 border-gray-100'>
      <article className='flex items-center gap-2 w-full'>
        <img className='w-[120px] aspect-square object-contain' src={product.thumbnail} alt={product.title} />
        <footer>
          <p>{product.title}</p>
          <span>$ {product.price}</span>
          <section className='flex gap-2 items-center'>
            quantity: {product.quantity}
            <button className='bg-slate-700 px-2 py-1 rounded' onClick={addToCart}>+</button>
          </section>
        </footer>
      </article>
    </li>
  )
}

export function Cart () {
  const { cart, addToCart, clearCart } = useContext(CartContext)
  return (
    <section>
      <label
        htmlFor='cart'
        className='absolute top-1 hover:cursor-pointer right-2 rounded-full bg-sky-600 p-2 peer hover:scale-110 z-20'
      >
        <CartIcon />
      </label>
      <input type='checkbox' id='cart' hidden className='peer' />

      <aside className='hidden peer-checked:flex absolute z-10 bg-sky-950 top-0 right-0 w-[300px] flex-col items-center h-screen gap-2'>
        <h3>Your shopping Cart</h3>

        <section>
          <ul className='flex flex-col gap-2'>
            {cart.map((product) => (
              <ItemCart
                key={product.id}
                product={product}
                addToCart={() => addToCart(product)}
              />
            ))}
          </ul>
        </section>

        <button
          onClick={() => clearCart()}
          className='bg-sky-400 p-1 rounded text-white'
        >Clear Cart
        </button>
      </aside>
    </section>
  )
}
