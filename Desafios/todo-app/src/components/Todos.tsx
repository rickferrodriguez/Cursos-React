interface Todo {
  id: string
  title: string
  completed: boolean
}

type ListOfTodos = Todo[]

interface Props {
  todos: ListOfTodos
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
  <ul>
    {
      todos.map((todo) => (
        <li key={todo.id}>
        <p>{todo.title}</p>
        </li>
      ))
    }
  </ul>
  )
}
