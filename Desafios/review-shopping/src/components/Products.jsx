import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { addToCart } = useContext(CartContext)
  return (
    <main className='products'>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
