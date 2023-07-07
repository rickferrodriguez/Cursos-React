import { FILTERS_BUTTONS } from '../consts'
import { type FilterType } from '../types'

interface Props {
  filterSelected: FilterType
  handleFilter: (filter: FilterType) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilter }) => {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = filterSelected === key
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a href={href} className={className} onClick={(event) => {
              event.preventDefault()
              handleFilter(key as FilterType)
            }}>
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
