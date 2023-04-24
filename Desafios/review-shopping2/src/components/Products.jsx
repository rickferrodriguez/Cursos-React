function ItemProduct ({ product }) {
  return (
    <li className='bg-white flex p-1 gap-2'>
      <header className='flex justify-center'>
        <strong className='hidden'>{product.title}</strong>
        <img className='w-[200px] aspect-square object-contain' src={product.thumbnail} alt={product.title} />
      </header>
      <footer className='flex flex-col justify-between h-full w-full'>
        <strong className='font-bold text-base'>{product.title}</strong>
        <small>by <span className='font-semibold'>{product.brand}</span></small>
        <p className='text-sm line-clamp-3 h-[60px]'>{product.description}</p>
        <section className='flex flex-col'>
          <span className='font-bold'>$ {product.price}</span>
          <button className='bg-slate-600 py-1 px-2 rounded-lg'>add to cart</button>
        </section>
      </footer>
    </li>
  )
}

export function Products ({ products }) {
  return (
    <main className=' flex justify-center'>
      <ul className='grid grid-cols-1 w-[450px] text-gray-900 gap-5'>
        {
          products.map(product => (
            <ItemProduct key={product.id} product={product} />
          ))
        }
      </ul>
    </main>
  )
}
