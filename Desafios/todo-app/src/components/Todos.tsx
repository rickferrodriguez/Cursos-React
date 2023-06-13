import React from 'react'
import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodos: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            onRemoveTodos={onRemoveTodos}
          />
        </li>
      ))}
    </ul>
  )
}
