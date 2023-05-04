import { AddToCartIcon } from './Icons'

export function ItemProduct ({ item }) {
  const { title, description, thumbnail, price } = item
  return (
    <li className='flex flex-col gap-2'>
      <strong className='text-center w-full text-xl'>{title}</strong>
      <img
        className='w-[300px] aspect-[4/3] object-contain self-center'
        src={thumbnail}
        alt={title}
      />
      <p className='line-clamp-3'>{description}</p>
      <section className='flex justify-between'>
        <span className='font-bold text-2xl'>
          $ {price}
          <small>.00</small>
        </span>
        <button className='font-bold bg-sky-600 px-2 rounded w-[200px] flex justify-evenly items-center'>
          Add to Cart
          <span>
            <AddToCartIcon />
          </span>
        </button>
      </section>
    </li>
  )
}

export function Products ({ products }) {
  const hasProducts = products?.length > 0
  return (
    <main className='flex justify-center'>
      {
      hasProducts
        ? (
          <ul className='w-[320px] grid grid-cols-1 gap-6'>
            {
          products.map(item => (
            <ItemProduct key={item.id} item={item} />
          ))
        }
          </ul>
          )
        : <p>no hay products</p>
    }
    </main>
  )
}
