export function Products ({ products }) {
  return (
    <ul className='p-8 gap-4 grid grid-cols-2'>
      {
        products.map(product => (
          <li
            className='bg-sky-950 rounded-[1rem] aspect-[4/3] flex flex-col justify-center items-center gap-4'
            key={product.id}
          >
            <h3 className='flex items-center h-[80px] text-center'>
              {splitProductTitle(product.title)}
            </h3>
            <img
              className=' w-[240px] aspect-[4/3] object-contain'
              src={product.image} alt={product.title}
            />
          </li>
        ))
      }
    </ul>
  )
}

function splitProductTitle (title) {
  if (title.startsWith('$')) {
    return title.split(' ').slice(2, 5).join(' ')
  } else {
    return title.split(' ').slice(0, 3).join(' ')
  }
}
