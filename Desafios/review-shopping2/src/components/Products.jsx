function ItemProduct ({ product }) {
  return (
    <li className='bg-white flex'>
      <header className='max-w-[200px]'>
        <strong className='hidden'>{product.title}</strong>
        <picture className='w-full aspect-square object-contain'>
          <img src={product.thumbnail} alt={product.title} />
        </picture>
      </header>
      <section className='hidden'>
        <p>{product.description}</p>
      </section>
      <footer className='flex flex-col justify-between h-full'>
        <strong>{product.title}</strong>
        <span>by {product.brand}</span>
        <section className='flex flex-col'>
          <span>$ {product.price}</span>
          <button className='bg-slate-600 py-1 px-2 rounded-lg'>add to cart</button>
        </section>
      </footer>
    </li>
  )
}

export function Products ({ products }) {
  return (
    <main className='p-2 flex justify-center'>
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
