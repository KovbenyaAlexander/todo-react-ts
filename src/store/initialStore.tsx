import { IStore } from '../types/store-types';

export const initialStore: IStore = {
  todos: [
    {
      text: 'delectus aut autem',
      id: '1',
      isDone: false,
    },
    {
      text: 'quis ut nam facilis et officia qui',
      id: '2',
      isDone: false,
    },
    {
      text: 'fugiat veniam minus',
      id: '3',
      isDone: false,
    },

  ],
  visibleTodos: [
    {
      text: 'delectus aut autem',
      id: '1',
      isDone: false,
    },
    {
      text: 'quis ut nam facilis et officia qui',
      id: '2',
      isDone: false,
    },
    {
      text: 'fugiat veniam minus',
      id: '3',
      isDone: false,
    },
  ],
  searchSettings: {
    isShowAllTodo: true,
    isShowActiveTodo: false,
    isShowCompletedTodo: false,
    searchText: '',
  },
};
