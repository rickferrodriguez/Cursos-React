import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodos: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodos }) => {
  return (
    <div className='view'>
      <input type='checkbox' checked={completed} className='toggle' />
      <label>{title}</label>
      <button onClick={() => { onRemoveTodos(id) }} className='destroy'></button>
    </div>
  )
}
