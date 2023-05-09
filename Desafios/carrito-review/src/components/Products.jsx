import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function ItemProduct ({
  item,
  addToCart,
  isProductInCart,
  removeFromCart
}) {
  const { title, description, thumbnail, price } = item
  return (
    <li className='flex flex-col gap-2 p-3 bg-slate-800 rounded'>
      <strong className='text-center w-full text-xl'>{title}</strong>
      <img
        className='w-[300px] aspect-auto object-fit self-center rounded overflow-hidden'
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
            isProductInCart ? 'bg-red-600 hover:bg-red-800 flex flex-col justify-center gap-1 py-1' : 'bg-sky-600 flex justify-evenly hover:bg-sky-800'
          } rounded w-[160px]  items-center `}
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
  const checkProductInCart = (product) => {
    return cart?.some((item) => item.id === product.id)
  }
  const hasProducts = products?.length > 0
  return (
    <main className='flex justify-center mt-[40px]'>
      {hasProducts
        ? (
          <ul className='w-[310px] grid grid-cols-1 gap-6'>
            {products.map((item) => {
              const isProductInCart = checkProductInCart(item)
              return (
                <ItemProduct
                  key={item.id}
                  item={item}
                  addToCart={() => addToCart(item)}
                  isProductInCart={isProductInCart}
                  removeFromCart={() => removeFromCart(item)}
                />
              )
            })}
          </ul>
          )
        : (
          <p>no hay products</p>
          )}
    </main>
  )
}
