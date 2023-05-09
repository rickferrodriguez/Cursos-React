import { useId } from 'react'
import { CartIcon } from './Icons'

export function Cart () {
  const cartToggleId = useId()
  return (
    <section>
      <label className='absolute bg-sky-500 p-2 rounded-full' htmlFor={cartToggleId}> <CartIcon /> </label>
      <input type='checkbox' id={cartToggleId} hidden />
    </section>
  )
}
