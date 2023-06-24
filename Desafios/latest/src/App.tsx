import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId } from './types'

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

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
      <h1>Todo App</h1>
      <Todos todos={todos} onRemoveTodos={handleRemove}/>
    </div>
  )
}

export default App
