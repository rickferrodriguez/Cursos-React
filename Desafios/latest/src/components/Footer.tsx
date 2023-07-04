import { type FilterType } from '../type'
import { Filters } from './Filters'

interface Props {
  filterSelected: FilterType
  completedTaskCount: number
  onHandleFilter: (filter: FilterType) => void
  onDeleteAllCompletedTodos: () => void
  completedTaskExist: boolean
}

export const Footer: React.FC<Props> = ({
  filterSelected,
  onHandleFilter,
  completedTaskCount,
  onDeleteAllCompletedTodos,
  completedTaskExist
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
      {completedTaskExist && (
        <button
          className='clear-completed'
          onClick={() => {
            onDeleteAllCompletedTodos()
          }}
        >
          Delete Completed
        </button>
      )}
    </footer>
  )
}
