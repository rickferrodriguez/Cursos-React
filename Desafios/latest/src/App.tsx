import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType, type filterValue } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './const'

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
  const [filter, setFilter] = useState<filterValue>(TODO_FILTERS.ALL)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleteTodo = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
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

  const handleFilter = (filter: filterValue): void => {
    setFilter(filter)
  }

  const pendingTaskCount = todos.filter((todo) => !todo.completed).length
  const completedTaskCount = todos.filter((todo) => todo.completed).length

  const handleDeleteCompletedTask = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filter === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <h1>Reset Todo</h1>
      <Todos
        todos={filteredTodos}
        onRemoveTodos={handleRemoveTodo}
        onCompleteTodos={handleCompleteTodo}
      />
      <Footer
        filterSelected={filter}
        handleFilter={handleFilter}
        pendingTaskCount={pendingTaskCount}
        completedTaskCount={completedTaskCount}
        onDeletedTasksDone={handleDeleteCompletedTask}
      />
    </div>
  )
}

export default App
