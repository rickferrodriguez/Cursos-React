import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

export function Cart () {
  return (
    <>
      <label className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://i.dummyjson.com/data/products/6/thumbnail.png'
              alt='MacBook Pro'
            />
            <div>
              <strong>MacBook Pro</strong> - $1749
            </div>

            <footer>
              <span>Qnty: 1</span> <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
