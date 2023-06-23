interface Todo {
  id: string
  title: string
  completed: boolean
}

interface ListOfTodos { todos: Todo[] }

type Props = ListOfTodos

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))
      }
    </ul>
  )
}
