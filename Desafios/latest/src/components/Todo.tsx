import { type Todo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className='view'>
      <input type="checkbox" checked={completed} className='toggle' />
      <label>{title}</label>
      <button className='destroy'></button>
    </div>
  )
}
