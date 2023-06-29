import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

const mocksTodos = [
  {
    id: '1',
    title: 'title todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'title todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo title 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleteTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>Reset Todo</h1>
      <Todos todos={todos} onRemoveTodos={handleRemoveTodo} onCompleteTodos={handleCompleteTodo} />
    </div>
  )
}

export default App
