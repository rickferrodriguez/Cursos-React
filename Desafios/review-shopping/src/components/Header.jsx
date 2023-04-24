import { Filters } from './Filters'

export function Header () {
  return (
    <header className='flex items-center flex-col gap-4 mb-4'>
      <h1 className='text-gray-200 font-bold text-center text-3xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text'>Shopping Cart</h1>
      <Filters />
    </header>
  )
}
