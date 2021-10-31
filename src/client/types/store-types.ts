export interface ITodo {
  text: string
  id: string
  isDone: boolean
}

export interface IStore {
  todos: ITodo[]
}
