export function Products ({ products }) {
  return (
    <ul className='p-8 gap-6 grid grid-cols-1'>
      {products.map((product) => (
        <li className='w-full flex justify-center' key={product.id}>
          <article className='rounded-[1rem] overflow-hidden flex flex-col justify-center items-center gap-4 w-[340px] h-[400px]'>
            <figure className=' rounded-[1rem] flex items-center overflow-hidden'>
              <img
                className='aspect-[3/4] object-contain'
                src={product.image}
                alt={product.title}
              />
            </figure>
            <footer className='px-1 w-full font-medium text-white'>
              <h3 className='flex items-center truncate text-center'>
                {splitProductTitle(product.title)}
              </h3>
              <p>$ {product.price}</p>
            </footer>
          </article>
        </li>
      ))}
    </ul>
  )
}

function splitProductTitle (title) {
  if (title.startsWith('$')) {
    return title.split(' ').slice(2).join(' ')
  }

  return title
}
