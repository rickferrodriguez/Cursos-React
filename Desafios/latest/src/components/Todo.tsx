import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodos: ({ id }: TodoId) => void
  onSetAsCompletedTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodos,
  onSetAsCompletedTodo
}) => {
  return (
    <div className='view'>
      <input
        type='checkbox'
        checked={completed}
        className='toggle'
        onChange={(event) => {
          onSetAsCompletedTodo({ id, completed: event.target.checked })
        }}
      />
      <label>{title}</label>
      <button
        onClick={() => {
          onRemoveTodos({ id })
        }}
        className='destroy'
      ></button>
    </div>
  )
}
