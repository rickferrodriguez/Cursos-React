import { type TODO_FILTERS } from './const'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>

export type TodoList = Todo[]

export type filterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
