import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { CartIcon } from './Icons'

export function ItemCart ({ product }) {
  return (
    <li className='border-b-2 border-gray-100'>
      <article className='flex items-center gap-2 w-full'>
        <img className='w-[120px] aspect-square object-contain' src={product.thumbnail} alt={product.title} />
        <footer>
          <p>{product.title}</p>
          <span>$ {product.price}</span>
        </footer>
      </article>
    </li>
  )
}

export function Cart () {
  const { cart } = useContext(CartContext)
  return (
    <section>
      <label htmlFor='cart' className='absolute top-1 hover:cursor-pointer right-2 rounded-full bg-sky-600 p-2 peer hover:scale-110 z-20'>
        <CartIcon />
      </label>
      <input type='checkbox' id='cart' hidden className='peer' />

      <aside className='hidden peer-checked:flex absolute z-10 bg-sky-950 top-0 right-0 w-[300px] flex-col items-center h-screen'>
        <h3>Your shopping Cart</h3>

        <section>
          <ul className='flex flex-col gap-2'>
            {
              cart.map(product => (
                <ItemCart key={product.id} product={product} />
              ))
            }
          </ul>
        </section>
      </aside>
    </section>
  )
}
