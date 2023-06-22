import { type TodoList } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: TodoList
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo id={todo.id} title={todo.title} completed={todo.completed} />
          </li>
        ))
      }
    </ul>
  )
}
