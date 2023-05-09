import { AddToCartIcon } from './Icons'

function ItemProduct ({ product }) {
  const { title, price, description, thumbnail } = product
  return (
    <li className='flex flex-col items-center gap-2 bg-slate-700 p-1 rounded'>
      <strong className='text-xl text-sky-500'>{title}</strong>
      <img className='rounded overflow-hidden w-full aspect-auto object-contain' src={thumbnail} alt={title} />
      <section className='flex flex-col gap-2'>
        <p>{description}</p>
        <div className='flex justify-between'>
          <span className='text-2xl font-bold'>$ {price}<small>.00</small> </span>
          <button className='bg-sky-500 flex items-center gap-4 px-2 rounded'>Add to Cart <span><AddToCartIcon /> </span></button>
        </div>
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
            <ul className='grid grid-cols-1 w-[300px] gap-5'>
              {
            products?.map((product) => (
              <ItemProduct key={product.id} product={product} />
            ))
          }
            </ul>
            )
          : (
            <p>no hay productos</p>
            )
      }
    </main>
  )
}
