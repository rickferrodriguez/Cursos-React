import './Products.css'

export function Products ({ products }) {
  const hasProducts = products?.length > 0
  return (
    <main className='products'>
      {
        hasProducts
          ? (
            <ul>
              {
                products.slice(0, 10).map((product) => (
                  <li key={product.id}>
                    <img src={product.thumbnail} alt='product.title' />
                    <strong>{product.title} - ${product.price}</strong>
                  </li>
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
