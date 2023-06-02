import { useState } from 'react'

const mockTodos = [
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false

  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  return (
    <h1>Todo mvc</h1>
  )
}

export default App
