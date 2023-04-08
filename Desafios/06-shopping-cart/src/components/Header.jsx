import { Filters } from './Filter.jsx'

export function Header ({ changeFilter }) {
  return (
    <header>
      <h1>Shopping cart 🛒</h1>
      <Filters onChange={changeFilter} />
    </header>
  )
}
