import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon } from './Icons'

export function ItemCart ({ item, addToCart }) {
  const { price, thumbnail, title, quantity } = item
  return (
    <li className='border-b-2 border-slate-400 py-1'>
      <article className='flex gap-3'>
        <img className='w-[140px]' src={thumbnail} alt={title} />
        <section className='flex flex-col'>
          <strong>{title}</strong>
          <span>$ {price}.00
          </span>
          <div>
            Qnty: {quantity} <button onClick={addToCart} className='bg-sky-800 px-1 rounded'>+</button>
          </div>
        </section>
      </article>
    </li>
  )
}

export function Cart () {
  const cartToggleId = useId()
  const { cart, addToCart } = useCart()
  return (
    <section>
      <label className='absolute hover:bg-sky-700 hover:scale-110 hover:cursor-pointer right-4 top-4 z-10 bg-sky-500 p-2 rounded-full' htmlFor={cartToggleId}> <CartIcon /> </label>
      <input className='peer' type='checkbox' id={cartToggleId} hidden />

      <aside className='absolute hidden top-0 right-0 w-[270px] px-2 py-7 peer-checked:flex flex-col gap-6 bg-slate-700 h-full'>
        <h2 className='text-center text-2xl font-bold'>Cart</h2>
        <ul className='flex flex-col gap-4 '>
          {
          cart?.map(item => (
            <ItemCart key={item.id} item={item} addToCart={() => addToCart(item)} />
          ))
        }
        </ul>
      </aside>
    </section>
  )
}
