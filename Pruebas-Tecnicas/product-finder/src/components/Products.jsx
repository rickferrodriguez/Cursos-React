export function Products ({ products }) {
  return (
    <ul className='p-8 gap-4 grid grid-cols-2'>
      {
        products.map(product => (
          <li
            className='bg-white border rounded-[1rem] border-sky-400 flex flex-col justify-center items-center gap-4'
            key={product.id}
          >
            <h3 className='flex items-center h-[80px] text-center'>
              {product.title}
            </h3>
            <img
              className='w-[250px] aspect-square object-contain'
              src={product.image} alt={product.title}
            />
          </li>
        ))
      }
    </ul>
  )
}
