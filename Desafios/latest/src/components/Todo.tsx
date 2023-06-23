import { type Tod}

export const Todo: React.FC = ({ id, title, completed }) => {
  return (
    <div className='view'>
      <input type='checkbox' className='toggle' checked={completed} />
      <label>{title}</label>
      <button className='destroy'></button>
    </div>
  )
}
