import { TODO_FILTERS } from '../consts.ts'
import { type FilterValue } from '../types'

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.All]: {
    literal: 'Todas',
    href: `/?filter=${TODO_FILTERS.All}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activas',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completadas',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a href={href} className={className} onClick={(event) => {
              event.preventDefault()
              onFilterChange(key as FilterValue)
            }}>
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}