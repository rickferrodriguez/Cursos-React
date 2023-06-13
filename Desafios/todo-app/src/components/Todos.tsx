import React from 'react'
import { type TodoId, type ListOfTodos, type Todo as TodoTypes } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onHandleComplete: ({ id, completed }: Pick<TodoTypes, 'id' | 'completed'>) => void
  onRemoveTodos: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos, onHandleComplete }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            onRemoveTodos={onRemoveTodos}
            onHandleComplete={onHandleComplete}
          />
        </li>
      ))}
    </ul>
  )
}
