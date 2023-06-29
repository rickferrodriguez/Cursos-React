import { type TodoId, type TodoList } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: TodoList
  onRemoveTodos: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo id={todo.id} completed={todo.completed} title={todo.title} onRemoveTodos={onRemoveTodos} />
        </li>
      ))}
    </ul>
  )
}
