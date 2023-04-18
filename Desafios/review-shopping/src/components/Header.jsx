import { Filters } from './Filters'

export function Header ({ handleFilters }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters onChange={handleFilters} />
    </header>
  )
}
