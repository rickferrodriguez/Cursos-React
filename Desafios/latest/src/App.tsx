import { useState } from 'react'
import { mocksTodos } from './mocks'
import { Todos } from './components/Todos'
import { type TodoId } from './types'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
    <h1>Reset todo</h1>
    <Todos todos={todos} onRemoveTodos={handleRemoveTodo}/>
    </div>
  )
}

export default App
