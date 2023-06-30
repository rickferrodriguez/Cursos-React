import { type filterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  filterSelected: filterValue
  handleFilter: (filter: filterValue) => void
  pendingTaskCount: number
}

export const Footer: React.FC<Props> = ({
  filterSelected,
  handleFilter,
  pendingTaskCount
}) => {
  return (
    <footer className='footer'>
      <span className="todo-count">Tareas Pendientes {pendingTaskCount}</span>
      <Filters filterSelected={filterSelected} handleFilter={handleFilter} />
    </footer>
  )
}
