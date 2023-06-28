import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId } from './types'

const mocksTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
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
  const [todos, setTodos] = useState(mocksTodos)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>todo app</h1>
      <Todos todos={todos} onRemoveTodos={handleRemoveTodo} />
    </div>
  )
}

export default App
