import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useContext(CartContext)
  const isProductInCart = (product) => {
    return cart.find((item) => item.id === product.id)
  }

  return (
    <main className='flex justify-center'>
      <ul className='grid grid-cols-1 gap-2'>
        {
          products.map(product => {
            const productInCart = isProductInCart(product)
            return (
              <li
                key={product.id}
                className='bg-white h-full rounded-[1.5rem]
                overflow-hidden py-5 px-3 flex flex-col w-[260px]'
              >
                <header className='flex flex-col items-center h-[240px]'>
                  <strong className='text-center h-[50px] flex items-center line-clamp-2'>{product.title}</strong>
                  <img src={product.thumbnail} className='flex-grow aspect-[4/3] object-fill' alt={product.title} />
                </header>
                <footer className='flex flex-col'>
                  <span className='font-bold text-gray-400 truncate'>{product.brand}</span>
                  <strong className='truncate text-xl'>{product.title}</strong>
                  <p className='text-[13px] h-[60px] line-clamp-3'>{product.description}</p>
                  <div className='mt-4 flex relative justify-between items-end'>
                    <small className='absolute top-[-4px] left-0 text-gray-400 z-0'>Price</small>
                    <span className='font-bold text-xl z-0'>
                      ${product.price}
                    </span>
                    <button
                      className={`rounded-[1.5rem] px-4 py-2 z-0 ${
                      productInCart ? 'bg-red-500' : 'bg-blue-950 hover:bg-blue-900'
                    }`}
                      onClick={() => productInCart ? removeFromCart(product) : addToCart(product)}
                    >
                      {productInCart
                        ? (
                          <RemoveFromCartIcon />
                          )
                        : (
                          <div className='flex gap-1 text-gray-100 font-semibold'>
                            <AddToCartIcon /> Buy Now
                          </div>
                          )}
                    </button>
                  </div>
                </footer>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
