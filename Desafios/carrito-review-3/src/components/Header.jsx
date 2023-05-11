import { Filters } from './Filters'

export function Header ({ handleFilters }) {
  return (
    <header className='mb-6 flex flex-col gap-6'>
      <h1 className='text-3xl font-bold text-sky-500 text-center'>Shopping Cart 🛒</h1>
      <Filters onChange={handleFilters} />
    </header>
  )
}
