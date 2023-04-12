import { useContext } from 'react'
import { CartContext } from '../context/cartContext.jsx'
import { AddToCartIcon } from './Icons.jsx'
import './Products.css'

export function Products ({ products }) {
  const { addToCart } = useContext(CartContext)
  const hasProducts = products?.length > 0
  return (
    <main className='products'>
      {hasProducts && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
