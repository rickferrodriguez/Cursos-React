import { useCart } from '../hooks/useCart'
import { AddToCartIcon } from './Icons'

function ItemProduct ({ product, addToCart, productInCart, removeFromCart }) {
  const { title, price, description, thumbnail } = product
  return (
    <li className='flex flex-col items-center gap-2 bg-slate-700 p-1 rounded'>
      <strong className='text-xl text-sky-500'>{title}</strong>
      <img
        className='rounded overflow-hidden w-full aspect-auto object-contain'
        src={thumbnail}
        alt={title}
      />
      <section className='flex flex-col gap-2'>
        <p>{description}</p>
        <div className='flex justify-between'>
          <span className='text-2xl font-bold'>
            $ {price}
            <small>.00</small>{' '}
          </span>
          <button
            onClick={productInCart ? removeFromCart : addToCart}
            className={`${
              productInCart ? 'bg-red-500' : 'bg-sky-500 '
            } flex items-center gap-4 px-2 rounded`}
          >
            Add to Cart{' '}
            <span>
              <AddToCartIcon />{' '}
            </span>
          </button>
        </div>
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
    <main className='flex justify-center'>
      {hasProducts
        ? (
          <ul className='grid grid-cols-1 w-[300px] gap-5'>
            {products?.map((product) => {
              const isProductInCart = checkProductInCart(product)
              console.log(isProductInCart)
              return (
                <ItemProduct
                  key={product.id}
                  product={product}
                  addToCart={() => addToCart(product)}
                  removeFromCart={() => removeFromCart(product)}
                  productInCart={isProductInCart}
                />
              )
            })}
          </ul>
          )
        : (
          <p>no hay productos</p>
          )}
    </main>
  )
}
