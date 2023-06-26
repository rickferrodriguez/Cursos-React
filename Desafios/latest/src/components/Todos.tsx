import { type Todo as TodoType, type TodoId, type TodoList } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: TodoList
  onRemoveTodos: ({ id }: TodoId) => void
  onSetAsCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed' >) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos, onSetAsCompletedTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodos={onRemoveTodos}
            onSetAsCompletedTodo={onSetAsCompletedTodo}
          />
        </li>
      ))}
    </ul>
  )
}
