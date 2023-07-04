import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoTilte, type FilterType, type TodoId, type Todo as TodoType } from './type'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './const'
import { Header } from './components/Header'

const MOCKS_TODOS = [
  {
    id: '1',
    title: 'todo app 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo app 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo app 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(MOCKS_TODOS)
  const [filter, setFilter] = useState<FilterType>(TODO_FILTERS.ALL)

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

  const onHandleFilter = (filter: FilterType): void => {
    setFilter(filter)
  }

  const filteredTodos = todos.filter((todo) => {
    if (TODO_FILTERS.COMPLETED === filter) return todo.completed
    if (TODO_FILTERS.PENDING === filter) return !todo.completed

    return todo
  })

  const completedTaskCount = todos.filter((todo) => !todo.completed).length

  const completedTaskExist = completedTaskCount > 0

  const handleDeleteAllCompletedTodos = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const onCreateTodo = ({ title }: TodoTilte): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onCreateTodo={onCreateTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodos={handleRemoveTodo}
        onCompleteTodos={handleCompleteTodo}
      />
      <Footer
        completedTaskCount={completedTaskCount}
        filterSelected={filter}
        onHandleFilter={onHandleFilter}
        onDeleteAllCompletedTodos={handleDeleteAllCompletedTodos}
        completedTaskExist={completedTaskExist}
      />
    </div>
  )
}

export default App
