import { Filters } from './Filters'

export function Header ({ sendFilters }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters onChange={sendFilters} />
    </header>
  )
}
