import { type TodoList } from '../types'

interface Props {
  todos: TodoList
  activeCount: number
}

export const Footer: React.FC<Props> = ({
  activeCount,
  todos,
  onClearCompleted
}) => {
  return (
    <footer className='footer'>
      <span>
        <strong>{todos.length}</strong> Tareas Pendientes
      </span>
      <Filters
        filtersSelected={}
        onFiltersChange={() => {}}
      />
    </footer>
  )
}
