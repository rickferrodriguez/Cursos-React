import { useContext } from 'react'
import { CartContext } from '../context/cartContext.jsx'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Products.css'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useContext(CartContext)
  const productInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  const hasProducts = products?.length > 0
  return (
    <main className='products'>
      {hasProducts && (
        <ul>
          {products.map((product) => {
            const isProductInCart = productInCart(product)
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div className='cart-group'>
                  <p>
                    {product.title} - ${product.price}
                  </p>
                  <button
                    className={
                      isProductInCart ? 'button-cart inCartIcon' : 'button-cart'
                    }
                    onClick={() =>
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)}
                  >
                    {isProductInCart
                      ? (
                        <RemoveFromCartIcon />
                        )
                      : (
                        <AddToCartIcon />
                        )}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
