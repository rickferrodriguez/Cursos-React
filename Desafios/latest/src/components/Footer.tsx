import { type FilterType } from '../types'
import { Filters } from './Filters'

interface Props {
  filterSelected: FilterType
  handleFilter: (filter: FilterType) => void
  pendingTaskCount: number
  isThereACompletedTask: boolean
  onDeleteCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  filterSelected,
  handleFilter,
  pendingTaskCount,
  isThereACompletedTask,
  onDeleteCompleted
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>{pendingTaskCount} Tareas Pendientes</span>
      <Filters filterSelected={filterSelected} handleFilter={handleFilter} />
      {isThereACompletedTask && (
        <button className='clear-completed' onClick={() => { onDeleteCompleted() }}>
          Delete Completed
        </button>
      )}
    </footer>
  )
}
