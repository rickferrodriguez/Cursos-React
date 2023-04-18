import { Filters } from './Filters'

export function Header () {
  return (
    <header>
      <h1 className='text-sky-600'>Shopping Cart</h1>
      <Filters />
    </header>
  )
}
