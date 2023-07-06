import { useState } from 'react'
import { mocksTodos } from './mocks'
import { Todos } from './components/Todos'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)
  return (
    <div className='todoapp'>
    <h1>Reset todo</h1>
    <Todos todos={todos} />
    </div>
  )
}

export default App
