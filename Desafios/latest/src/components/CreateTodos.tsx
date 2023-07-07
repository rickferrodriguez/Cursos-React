import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  onCreateTask: ({ title }: TodoTitle) => void
}

export const CreateTodos: React.FC<Props> = ({ onCreateTask }) => {
  const [newTask, setNewTask] = useState('')

  const handleTypingTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputTask = event.target.value
    setNewTask(inputTask)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onCreateTask({ title: newTask })
    setNewTask('')
  }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="¿Qué quieres hacer?" value={newTask} onChange={handleTypingTask}/>
    </form>
  )
}
