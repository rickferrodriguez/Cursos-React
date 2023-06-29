import { type TodoId, type TodoList, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: TodoList
  onRemoveTodos: ({ id }: TodoId) => void
  onCompleteTodos: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodos,
  onCompleteTodos
}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            onRemoveTodos={onRemoveTodos}
            onCompleteTodos={onCompleteTodos}
          />
        </li>
      ))}
    </ul>
  )
}
