import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { addToCart, cart } = useContext(CartContext)
  const isProductInCart = (product) => {
    return cart.find((item) => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const productInCart = isProductInCart(product)
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <button
                  className={
                    productInCart ? 'button-cart inCart' : 'button-cart'
                  }
                  onClick={() => addToCart(product)}
                >
                  {productInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
