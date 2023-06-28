import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  onClearCompleted: () => void
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  onClearCompleted,
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange
}) => {
  return (
    <footer className='footer'>
      <span>
        {activeCount} <strong>Tareas Pendientes</strong>
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  )
}
