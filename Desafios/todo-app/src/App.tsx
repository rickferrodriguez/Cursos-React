import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
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
  const [todos, setTodos] = useState(mockTodos)

  const removeTodos = (id: string): void => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
  }

  return (
    <div className='todoapp'>
      <h1>Todo App</h1>
      <Todos todos={todos} onRemoveTodos={removeTodos} />
    </div>
  )
}

export default App
