import { Filters } from './Filters'

export function Header ({ handleFilter }) {
  return (
    <header>
      <h1>Shopping Cart 🛒</h1>
      <Filters onChange={handleFilter} />
    </header>
  )
}
