import { useState } from 'react'
import { Todos } from './components/Todos'

const mocksTodos = [
  {
    id: '1',
    title: 'todo numero 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo numero 2',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)
  return (
    <div className='todoapp'>
      <h1>todo app</h1>
      <Todos todos={todos} />
    </div>
  )
}

export default App
