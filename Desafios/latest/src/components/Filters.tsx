import { FILTERS_BUTTONS } from '../const'
import { type FilterType } from '../type'

interface Props {
  filterSelected: FilterType
  onHandleFilter: (filter: FilterType) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onHandleFilter
}) => {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onHandleFilter(key as FilterType)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
