// import { useContext } from 'react'
// import { CartContext } from '../context/cartContext'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { addToCart } = useCart()
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
                <button onClick={() => addToCart(product)}>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
