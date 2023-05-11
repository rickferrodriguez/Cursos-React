import { useCart } from '../hooks/useCart'
import { AddToCartIcon } from './Icons'

export function ItemProduct ({ product, addToCart }) {
  const { price, description, thumbnail, title } = product
  return (
    <li className='flex flex-col gap-3 border-b-2 border-slate-400 py-2'>
      <strong className='text-center text-2xl'>{title}</strong>
      <img
        className='w-full aspect-video object-cover'
        src={thumbnail}
        alt={title}
      />
      <section className='flex flex-col gap-3'>
        <p>{description}</p>
        <div className='flex justify-between'>
          <span className='font-bold text-2xl'>
            $ {price}
            <small>.00</small>
          </span>
          <button
            onClick={addToCart}
            className='flex justify-evenly bg-sky-500 p-1 w-[140px] font-bold rounded'
          >
            Add to cart{' '}
            <span>
              {' '}
              <AddToCartIcon />
            </span>
          </button>
        </div>
      </section>
    </li>
  )
}

export function Products ({ products }) {
  const { addToCart } = useCart()
  const hasProducts = products?.length > 0
  return (
    <main className='flex justify-center'>
      {
        hasProducts
          ? (
            <ul className='grid grid-cols-1 w-[300px] gap-4'>
              {
            products?.map((product) => (
              <ItemProduct key={product.id} product={product} addToCart={() => addToCart(product)} />
            ))
            }
            </ul>
            )
          : <p>No hay products</p>
      }
    </main>
  )
}
