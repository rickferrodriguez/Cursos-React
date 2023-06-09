import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => {
        const { id, title, completed } = todo
        return (
          <li key={id} className={`${completed ? 'completed' : ''}`}>
            <Todo
              id={id}
              title={title}
              completed={completed}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        )
      })}
    </ul>
  )
}
