import { Filters } from './Filters'

export function Header ({ handleFilter }) {
  return (
    <header className='flex flex-col gap-7'>
      <h1 className='font-bold text-4xl text-center text-sky-300'>Product Cart 🛒</h1>
      <Filters onChange={handleFilter} />
    </header>
  )
}
