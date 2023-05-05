import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon, RemoveFromCartIcon } from './Icons'

export function ItemCart ({ item }) {
  const { thumbnail, quantity, title } = item
  return (
    <li className='flex gap-3 h-[100px] items-center'>
      <img
        className='w-[120px] aspect-square object-contain'
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong>
        <p>Qnty: {quantity}</p>
        <button>
          <RemoveFromCartIcon />
        </button>
      </div>
    </li>
  )
}

export function Cart () {
  const { cart } = useCart()
  console.log(cart)
  const cartId = useId()
  return (
    <section>
      <label htmlFor={cartId} className='hover:scale-110 hover:bg-sky-700 ease-in duration-100 absolute bg-sky-400 z-40 rounded-full p-1 right-6 top-2'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartId} className='peer' hidden />

      <article className='hidden w-[320px] flex-col gap-4 bg-slate-800 absolute right-0 top-0 z-10 pt-[40px] peer-checked:flex h-full px-2'>
        <h2 className='text-2xl font-bold text-center'>My Cart</h2>
        <ul>
          {
            cart.map(item => (
              <ItemCart key={item.id} item={item} />
            ))
          }
        </ul>
      </article>
    </section>
  )
}
