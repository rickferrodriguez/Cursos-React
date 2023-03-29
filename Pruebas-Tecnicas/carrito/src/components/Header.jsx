import { Filters } from './Filters.jsx'

export function Header ({ filters }) {
  return (
    <>
      <h1>React Products</h1>
      <Filters filters={filters} />
    </>
  )
}
