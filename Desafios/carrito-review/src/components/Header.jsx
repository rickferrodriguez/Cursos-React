import { Filters } from './Filters'

export function Header () {
  return (
    <header>
      <h1 className='font-bold text-4xl text-center text-sky-300'>Product Cart 🛒</h1>
      <Filters />
    </header>
  )
}
