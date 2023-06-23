export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface ListOfTodos { todos: Todo[] }
