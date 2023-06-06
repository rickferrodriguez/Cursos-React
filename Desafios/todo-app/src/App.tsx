import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Ver el video de retransmisión de Midu',
    completed: true
  },
  {
    id: '2',
    title: 'Sacar el todo app with typescript',
    completed: false
  },
  {
    id: '3',
    title: 'Ver la clase de typescript de midudev',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>Todo App</h1>
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  )
}

export default App
