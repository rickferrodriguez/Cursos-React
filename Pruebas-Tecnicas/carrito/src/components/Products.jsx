import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => (
            <li key={product.id}>
              <article>
                <img src={product.thumbnail} alt={product.title} />
                <section>
                  <h3>{product.title}</h3> - ${product.price}
                </section>

                <section>
                  <button>
                    <AddToCartIcon />
                  </button>
                </section>
              </article>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
