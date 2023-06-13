import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodos: (id: TodoId) => void
  onHandleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodos, onHandleComplete }) => {
  const handleTaskCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onHandleComplete({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className='view'>
      <input
        type='checkbox'
        className='toggle'
        checked={completed}
        onChange={handleTaskCheckBox}
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
