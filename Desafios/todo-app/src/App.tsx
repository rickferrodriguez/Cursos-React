import { Todos } from './components/Todos'

interface Todo {
  id: string
  title: string
  completed: boolean
}

const todos: Todo[] = [
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
  return (
    <>
    <h1>Reset Todo App React</h1>
    <Todos todos={todos} />
    </>
  )
}

export default App
