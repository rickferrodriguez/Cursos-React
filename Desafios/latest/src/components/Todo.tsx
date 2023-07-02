import { type TodoId, type Todo as TodoType } from '../type'

interface Props extends TodoType {
  onRemoveTodos: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodos }) => {
  return (
    <div className='view'>
      <input type="checkbox" className="toggle" checked={completed} />
      <label>{title}</label>
      <button className='destroy' onClick={() => {
        onRemoveTodos({ id })
      }}></button>
    </div>
  )
}
