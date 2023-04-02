export function Products ({ products }) {
  return (
    <ul className='p-8 gap-6 grid grid-cols-1'>
      {products.map((product) => (
        <li className='flex justify-center' key={product.id}>
          <article className='w-[320px] h-[400px] rounded-[1rem] overflow-hidden flex flex-col justify-center items-center gap-4 '>
            <figure className='relative rounded-[1rem] overflow-hidden'>
              <img
                src={product.image}
                alt={product.title}
              />
              {
                product.shipping && (
                  <div className='absolute z-10 bottom-1 right-2 px-4 bg-sky-500 rounded-[1rem]'>
                    <span className='text-[#000] font-semibold'>{product.shipping}</span>
                  </div>
                )
              }
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
