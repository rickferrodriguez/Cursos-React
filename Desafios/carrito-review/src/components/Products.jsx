import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function ItemProduct ({ item, addToCart, isProductInCart, removeFromCart }) {
  const { title, description, thumbnail, price } = item
  return (
    <li className='flex flex-col gap-2'>
      <strong className='text-center w-full text-xl'>{title}</strong>
      <img
        className='w-[300px] aspect-[4/3] object-contain self-center'
        src={thumbnail}
        alt={title}
      />
      <p className='line-clamp-3'>{description}</p>
      <section className='flex justify-between'>
        <span className='font-bold text-2xl'>
          $ {price}
          <small>.00</small>
        </span>
        <button
          onClick={isProductInCart ? removeFromCart : addToCart}
          className={`font-bold ${
            isProductInCart ? 'bg-red-500' : 'bg-sky-600'
          } px-2 rounded w-[200px] flex justify-evenly items-center`}
        >
          {isProductInCart ? 'Remove From Cart' : 'Add to Cart'}
          <span>
            {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
          </span>
        </button>
      </section>
    </li>
  )
}

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  const hasProducts = products?.length > 0
  return (
    <main className='flex justify-center'>
      {
      hasProducts
        ? (
          <ul className='w-[320px] grid grid-cols-1 gap-6'>
            {
          products.map(item => {
            const isProductInCart = checkProductInCart(item)
            return (
              <ItemProduct key={item.id} item={item} addToCart={() => addToCart(item)} isProductInCart={isProductInCart} removeFromCart={() => removeFromCart(item)} />
            )
          })
        }
          </ul>
          )
        : <p>no hay products</p>
    }
    </main>
  )
}
