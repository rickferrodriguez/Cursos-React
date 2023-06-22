import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div className='view'>
      <input type="checkbox" checked={completed} className='toggle' />
      <label >{title}</label>
      <button className='destroy' onClick={() => { onRemoveTodo(id) }}></button>
    </div>
  )
}
