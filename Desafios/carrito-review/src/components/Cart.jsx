import { useId } from 'react'
import { CartIcon, RemoveFromCartIcon } from './Icons'

export function Cart () {
  const cartId = useId()
  return (
    <section>
      <label htmlFor={cartId} className='absolute bg-sky-400 rounded-full p-1 right-6 top-2'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartId} hidden />

      <article className='hidden bg-slate-800'>
        <ul>
          <li>
            <strong>Key Holder</strong>
            <img src='https://i.dummyjson.com/data/products/30/thumbnail.jpg' alt='key holder' />

            <div>
              <p>Qnty: 1</p>
              <button><RemoveFromCartIcon /></button>
            </div>
          </li>
        </ul>
      </article>
    </section>
  )
}
