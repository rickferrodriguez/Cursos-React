import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoCompleted, type TodoId, type Todo as TodoType } from './types'

const mocksTodos = [
  {
    id: '1',
    title: 'todo numero 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo numero 2',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)

  const handleRemoveTodos = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleSetAsCompleteTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
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
      <h1>todo app</h1>
      <Todos todos={todos} onRemoveTodos={handleRemoveTodos} onSetAsCompletedTodo={handleSetAsCompleteTodo}/>
    </div>
  )
}

export default App
