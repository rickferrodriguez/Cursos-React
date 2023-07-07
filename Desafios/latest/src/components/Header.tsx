import { type TodoTitle } from '../types'
import { CreateTodos } from './CreateTodos'

interface Props {
  onCreateTask: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onCreateTask }) => {
  return (
    <header>
      <h1>Todos</h1>
      <CreateTodos onCreateTask={onCreateTask} />
    </header>
  )
}
