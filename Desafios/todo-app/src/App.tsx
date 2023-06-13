import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoTypes } from './types'

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

  const removeTodos = ({ id }: TodoId): void => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
  }

  const setAsCompleted = ({
    id,
    completed
  }: Pick<TodoTypes, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
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
      <h1>Todo App</h1>
      <Todos todos={todos} onRemoveTodos={removeTodos} onHandleComplete={setAsCompleted}/>
    </div>
  )
}

export default App
