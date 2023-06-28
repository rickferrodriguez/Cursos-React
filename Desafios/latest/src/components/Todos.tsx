import { type TodoId, type TodoList, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: TodoList
  onRemoveTodos: ({ id }: TodoId) => void
  onCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos, onCompleteTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodos={onRemoveTodos}
            onCompleteTodo={onCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}
