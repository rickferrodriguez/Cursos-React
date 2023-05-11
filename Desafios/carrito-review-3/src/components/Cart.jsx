import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon } from './Icons'

function ItemCart ({ item, addToCart, reduceItemCartQuantity }) {
  const { price, title, thumbnail, quantity } = item
  return (
    <li className='border-b-2 border-slate-400 pb-1'>
      <article className=' flex gap-1'>
        <img className='w-[120px]' src={thumbnail} alt={title} />
        <section className='flex flex-col'>
          <strong>{title}</strong>
          <span>$ {price}.00</span>
          <div className='flex gap-3'>
            <button
              onClick={reduceItemCartQuantity}
              className='bg-slate-400 px-1 rounded'
            >
              -
            </button>
            Qnty: {quantity}{' '}
            <button onClick={addToCart} className='bg-slate-400 px-1 rounded'>
              +
            </button>
          </div>
        </section>
      </article>
    </li>
  )
}

export function Cart () {
  const { cart, addToCart, reduceItemCartQuantity } = useCart()
  const cartCheckboxId = useId()
  return (
    <section>
      <label
        className='bg-sky-500 rounded-full p-1 hover:scale-125 hover:bg-sky-700 absolute top-3 right-3 z-10'
        htmlFor={cartCheckboxId}
      >
        <CartIcon />{' '}
      </label>
      <input className='peer' type='checkbox' id={cartCheckboxId} hidden />

      <aside className='hidden peer-checked:flex px-2 flex-col pt-3 h-full absolute top-0 right-0 w-[250px] bg-slate-700'>
        <h2 className='text-center text-2xl font-bold'>Cart</h2>
        <ul className='mt-7 flex flex-col gap-3'>
          {cart?.map((item) => (
            <ItemCart
              item={item}
              key={item.id}
              addToCart={() => addToCart(item)}
              reduceItemCartQuantity={() => reduceItemCartQuantity(item)}
            />
          ))}
        </ul>
      </aside>
    </section>
  )
}
