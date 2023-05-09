import { Filters } from './Filters'

export function Header () {
  return (
    <header className='mb-6 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold text-center'>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  )
}
