import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({
  title,
  id,
  completed,
  onRemoveTodo
}) => {
  return (
    <div className='view'>
      <input
        type='checkbox'
        className='toggle'
        checked={completed}
        onChange={() => {}}
      />
      <label htmlFor=''>{title}</label>
      <button
        onClick={() => {
          onRemoveTodo(id)
        }}
        className='destroy'
      ></button>
    </div>
  )
}
