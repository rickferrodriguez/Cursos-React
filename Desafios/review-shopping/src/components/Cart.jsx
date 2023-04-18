import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

export function Cart () {
  return (
    <section>
      <label htmlFor='cart' className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id='cart' hidden />

      <aside className='cart'>
        <h2>Your Cart</h2>
        <ul>
          <li>
            <img
              src='https://i.dummyjson.com/data/products/30/thumbnail.jpg'
              alt='key holder'
            />
            <div>
              <strong>key holder</strong> - $30
            </div>
            <footer>
              <small>Qnty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </section>
  )
}
