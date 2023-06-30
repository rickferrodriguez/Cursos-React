import { type filterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  filterSelected: filterValue
  handleFilter: (filter: filterValue) => void
  pendingTaskCount: number
  completedTaskCount: number
  onDeletedTasksDone: () => void
}

export const Footer: React.FC<Props> = ({
  filterSelected,
  handleFilter,
  pendingTaskCount,
  completedTaskCount,
  onDeletedTasksDone
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>Tareas Pendientes {pendingTaskCount}</span>
      <Filters filterSelected={filterSelected} handleFilter={handleFilter} />
      {completedTaskCount > 0 && (
        <button
          className='clear-completed'
          onClick={() => {
            onDeletedTasksDone()
          }}
        >
          Borrar Completadas
        </button>
      )}
    </footer>
  )
}
