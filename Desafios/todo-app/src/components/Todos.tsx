export function Todos ({ todos }): React.FC {
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
