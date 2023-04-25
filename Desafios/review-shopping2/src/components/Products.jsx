import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

function ItemProduct ({ product, addToCart, isProductInCart, removeFromCart }) {
  return (
    <li className='bg-white flex p-1 gap-2'>
      <header className='flex justify-center'>
        <strong className='hidden'>{product.title}</strong>
        <img
          className='w-[200px] aspect-square object-contain'
          src={product.thumbnail}
          alt={product.title}
        />
      </header>
      <footer className='flex flex-col justify-between h-full w-full'>
        <strong className='font-bold text-base'>{product.title}</strong>
        <small>
          by <span className='font-semibold'>{product.brand}</span>
        </small>
        <p className='text-sm line-clamp-3 h-[60px]'>{product.description}</p>
        <section className='flex flex-col'>
          <span className='font-bold'>$ {product.price}</span>
          <button
            onClick={isProductInCart ? removeFromCart : addToCart}
            className={`${isProductInCart ? 'bg-red-500' : 'bg-slate-900'} text-gray-200 py-1 px-2 rounded-lg flex justify-evenly`}
          >
            {
              isProductInCart
                ? <RemoveFromCartIcon />
                : <AddToCartIcon />
            }
          </button>
        </section>
      </footer>
    </li>
  )
}

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='pt-4 flex justify-center'>
      <ul className='grid grid-cols-1 w-[450px] text-gray-900 gap-5'>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <ItemProduct
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              isProductInCart={isProductInCart}
            />
          )
        })}
      </ul>
    </main>
  )
}
