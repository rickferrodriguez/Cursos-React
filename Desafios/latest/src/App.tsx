import { useState } from 'react'
import { mocksTodos } from './mocks'
import { Todos } from './components/Todos'
import { type FilterType, type Todo, type TodoId } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos)
  const [filter, setFilter] = useState<FilterType>(TODO_FILTERS.ALL)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleteTodo = ({
    id,
    completed
  }: Pick<Todo, 'id' | 'completed'>): void => {
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

  const handlerFilter = (filter: FilterType): void => {
    setFilter(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filter === TODO_FILTERS.COMPLETED) return todo.completed

    return todo
  })

  return (
    <div className='todoapp'>
      <h1>Reset todo</h1>
      <Todos
        todos={filteredTodos}
        onRemoveTodos={handleRemoveTodo}
        onCompleteTodo={handleCompleteTodo}
      />
      <Footer handleFilter={handlerFilter} filterSelected={filter} />
    </div>
  )
}

export default App
