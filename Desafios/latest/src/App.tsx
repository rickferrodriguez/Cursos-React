import { useState } from 'react'
import { Todos } from './components/Todos'

const MOCKS_TODOS = [
  {
    id: '1',
    title: 'todo app 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo app 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo app 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(MOCKS_TODOS)
  return (
    <div className='todoapp'>
      <h1>Reset todo app</h1>
      <Todos todos={todos} />
    </div>
  )
}

export default App
