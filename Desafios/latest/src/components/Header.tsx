import { type TodoTilte } from '../type'
import { CreateTodo } from './CreateTodo'

interface Props {
  onCreateTodo: ({ title }: TodoTilte) => void
}

export const Header: React.FC<Props> = ({ onCreateTodo }) => {
  return (
    <header className='header'>
      <h1>Todo</h1>

      <CreateTodo onCreateTodo={onCreateTodo}/>
    </header>
  )
}
