import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { addToCart, cart } = useContext(CartContext)
  const isProductInCart = (product) => {
    return cart.find((item) => item.id === product.id)
  }

  const doubleParagraph = (text) => {
    return text.split(' ').slice(0, 5).join(' ')
  }
  return (
    <main>
      <ul className='grid grid-cols-2 gap-2'>
        {
          products.map(product => {
            const productInCart = isProductInCart(product)
            return (
              <li
                key={product.id}
                className='bg-white h-[450px] rounded-[2rem]
                overflow-hidden py-6 px-2 flex flex-col'
              >
                <img src={product.thumbnail} className='aspect-square object-fill' alt={product.title} />
                <section>
                  <span className='block'>{product.brand}</span>
                  <strong>{product.title}</strong>
                  <p>{doubleParagraph(product.description)}</p>
                </section>
                <div className='flex justify-between items-center'>
                  <span className='font-semibold text-xs'>
                    ${product.price}
                  </span>
                  <button
                    className={`rounded-[2rem] px-4 py-2 ${
                      productInCart ? 'bg-red-500' : 'bg-blue-950'
                    }`}
                    onClick={() => addToCart(product)}
                  >
                    {productInCart
                      ? (
                        <RemoveFromCartIcon />
                        )
                      : (
                        <div className='flex gap-1 text-gray-100'>
                          <AddToCartIcon /> Buy Now
                        </div>
                        )}
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
