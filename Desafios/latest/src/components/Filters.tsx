import { FILTERS_BUTTONS } from '../const'
import { type filterValue } from '../types'

interface Props {
  filterSelected: filterValue
  handleFilter: (filter: filterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilter }) => {
  return (
    <ul>
    {
      Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
        <li key={key} className={className}>
        <a href={href} onClick={() => { handleFilter(key as filterValue) }}>{literal}</a>
        </li>
        )
      })
    }
    </ul>
  )
}
