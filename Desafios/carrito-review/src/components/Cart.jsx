import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from './Icons'

export function ItemCart ({ item, addToCart }) {
  const { thumbnail, quantity, title } = item
  return (
    <li className='flex gap-3 h-[100px] items-center'>
      <img
        className='w-[120px] aspect-square object-contain'
        src={thumbnail}
        alt={title}
      />
      <div className='flex flex-col gap-2'>
        <strong>{title}</strong>
        <section className='flex gap-2'>
          <p>Qnty: {quantity}</p>
          <button onClick={addToCart} className='bg-slate-600 border border-gray-300 px-2'>+</button>
        </section>
      </div>
    </li>
  )
}

export function Cart () {
  const { cart, addToCart, clearCart } = useCart()
  const cartId = useId()
  return (
    <section>
      <label
        htmlFor={cartId}
        className='hover:scale-110 hover:bg-sky-700 ease-in duration-100 absolute bg-sky-400 z-40 rounded-full p-2 right-5 top-2'
      >
        <CartIcon />
        {cart.length > 0
          ? (
            <small
              htmlFor='num-cart'
              className='absolute rounded-full bg-red-500 px-[5px] bottom-[-4px] left-[-5px]'
            >
              {cart.length}
            </small>
            )
          : null}
      </label>
      <input type='checkbox' id={cartId} className='peer' hidden />

      <aside className='hidden border rounded border-gray-300 w-[250px] flex-col items-center gap-4 bg-slate-800 absolute right-0 top-0 z-10 pt-[40px] peer-checked:flex h-full px-2'>
        <h2 className='text-2xl font-bold text-center'>My Cart</h2>
        <ul>
          {cart.map((item) => (
            <ItemCart
              key={item.id}
              item={item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </ul>
        <button onClick={() => clearCart()} className='flex justify-evenly py-2 bg-sky-400 rounded w-[150px]'>
          Clear Cart{' '}
          <span>
            <ClearCartIcon />
          </span>
        </button>
      </aside>
    </section>
  )
}
