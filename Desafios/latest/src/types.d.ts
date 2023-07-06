import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>

export type TodoList = Todo[]

export type FilterType = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
