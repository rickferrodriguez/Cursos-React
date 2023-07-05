import { useState } from 'react'
import { type TodoTilte } from '../type'

interface Props {
  onCreateTodo: ({ title }: TodoTilte) => void
}

export const CreateTodo: React.FC<Props> = ({ onCreateTodo }) => {
  const [typedTask, setTipedTask] = useState('')
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onCreateTodo({ title: typedTask })
        setTipedTask('')
      }}
    >
      <input
        className='new-todo'
        type='text'
        value={typedTask}
        placeholder='¿Qué quieres hacer?'
        autoFocus
        onChange={(event) => {
          setTipedTask(event.target.value)
        }}
      />
    </form>
  )
}
