export function ProductItem ({ product }) {
  const { title, image, price } = product
  return (
    <li className='bg-sky-900'>
      <article className='flex flex-col justify-center items-center gap-2'>
        <header className='max-w-[200px] text-center'>
          <strong className='flex items-center justify-center h-[50px]'>{title}</strong>
          <img className='w-[200px] aspect-square object-contain' src={image} alt={product.title} />
        </header>
        <footer className='flex gap-2 pb-2'>
          <span>
            $ {price}
          </span>
          <button className='bg-sky-400 py-1 px-2 rounded'>Add to Cart</button>
        </footer>
      </article>
    </li>
  )
}

export function Products ({ products }) {
  const hasProducts = products?.length > 0

  return hasProducts
    ? (
      <ul className='grid grid-cols-2 gap-2'>
        {products.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
      )
    : (
      <p className='text-center'>No hay productos para mostrar</p>
      )
}
