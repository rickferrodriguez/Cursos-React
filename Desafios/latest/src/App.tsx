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
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)
  return (
    <div className='todoapp'>
      <h1>Todo app</h1>
      <Todos todos={todos} />
    </div>
  )
}

export default App
