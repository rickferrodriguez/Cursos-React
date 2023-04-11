// import { useContext } from 'react'
// import { CartContext } from '../context/cartContext'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { cart, addToCart, removeCartItem } = useCart()
  const hasProducts = products?.length > 0

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      {hasProducts && (
        <ul>
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product)
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div className='cart-group'>
                  <p>
                    <strong>{product.title}</strong> - ${product.price}
                  </p>
                  <button className={isProductInCart ? 'button-cart inCartIcon' : 'button-cart'} onClick={() => isProductInCart ? removeCartItem(product) : addToCart(product)}>
                    {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                    }
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
