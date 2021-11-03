export interface ITodo {
  text: string
  id: string
  isDone: boolean
}

export interface ISearchSettings {
  searchText: string
  isShowAllTodo: boolean
  isShowCompletedTodo: boolean
  isShowActiveTodo: boolean
}

export interface IStore {
  todos: ITodo[]
  visibleTodos: ITodo[]
  searchSettings: ISearchSettings
}
