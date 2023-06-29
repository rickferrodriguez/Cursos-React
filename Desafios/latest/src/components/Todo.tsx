import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodos: ({ id }: TodoId) => void
  onCompleteTodos: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  title,
  completed,
  id,
  onRemoveTodos,
  onCompleteTodos
}) => {
  return (
    <div className='view'>
      <input
        type='checkbox'
        className='toggle'
        checked={completed}
        onChange={(event) => {
          onCompleteTodos({ id, completed: event.target.checked })
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodos({ id })
        }}
      ></button>
    </div>
  )
}
