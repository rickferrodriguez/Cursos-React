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

  const removeTodo = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>Todo app</h1>
      <Todos todos={todos} onRemoveTodo={removeTodo} />
    </div>
  )
}

export default App
