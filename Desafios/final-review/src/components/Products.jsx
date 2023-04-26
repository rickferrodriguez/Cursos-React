export function ProductItem ({ product }) {
  return (
    <li className='bg-sky-900'>
      <article className='flex flex-col justify-center items-center gap-2'>
        <header className='max-w-[200px] text-center'>
          <strong>{product.title}</strong>
          <img className='w-[200px] aspect-square object-contain' src={product.thumbnail} alt={product.title} />
        </header>
        <footer className='flex gap-2'>
          <span>
            $ {product.price}
          </span>
          <button className='bg-sky-400 py-1 px-2'>Add to Cart</button>
        </footer>
      </article>
    </li>
  )
}

export function Products ({ products }) {
  return (
    <ul className='grid grid-cols-2 gap-2'>
      {
      products.map(item => (
        <ProductItem key={item.id} product={item} />
      ))
    }
    </ul>
  )
}
