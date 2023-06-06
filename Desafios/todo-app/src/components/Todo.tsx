import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ title, completed, id, onRemoveTodo }) => {
  const handleCheckChanged = (): boolean => {
    return !completed
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={handleCheckChanged}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => { onRemoveTodo(id) }}></button>
    </div>
  )
}
