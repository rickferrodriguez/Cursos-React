import { Filter } from './Filter'

export function Header () {
  return (
    <header className='flex flex-col gap-4'>
      <h1 className='font-bold text-3xl text-center'>Shopping Cart 🛒</h1>
      <Filter />
    </header>
  )
}
