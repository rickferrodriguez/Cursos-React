import { Filter } from './Filter'

export function Header ({ handleFilter }) {
  return (
    <header>
      <h1 className='font-bold text-3xl text-center'>Shopping Cart React 🛒</h1>
      <Filter onChange={handleFilter} />
    </header>
  )
}
