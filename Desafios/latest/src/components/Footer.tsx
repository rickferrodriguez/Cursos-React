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
  activeCount,
  completedCount,
  filterSelected,
  handleFilterChange
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        {activeCount} <strong>Tareas Pendientes</strong>
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  )
}
