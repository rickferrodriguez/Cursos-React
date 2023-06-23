import { useState } from 'react'
import { Todos } from './components/Todos'

const mocksTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)
  return (
    <>
      <h1>Reset Todo App</h1>
      <Todos todos={todos} />
    </>
  )
}

export default App
