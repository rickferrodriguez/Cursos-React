import { AddToCartIcon } from './Icons.jsx'
import './Products.css'

export function Products ({ products }) {
  const hasProduts = products?.length > 0
  return (
    hasProduts && (
      <main className='products'>
        <ul>
          {products.slice(0, 10).map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title} - ${product.price}</strong>
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    )
  )
}
