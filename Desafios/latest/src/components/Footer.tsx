import { type FilterType } from '../type'
import { Filters } from './Filters'

interface Props {
  filterSelected: FilterType
  completedTaskCount: number
  onHandleFilter: (filter: FilterType) => void
}

export const Footer: React.FC<Props> = ({
  filterSelected,
  onHandleFilter,
  completedTaskCount
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        {completedTaskCount} Tareas Completadas
      </span>
      <Filters
        filterSelected={filterSelected}
        onHandleFilter={onHandleFilter}
      />
    </footer>
  )
}
