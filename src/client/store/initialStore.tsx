import { IStore } from '../types/store-types';

export const initialStore: IStore = {
  todos: [
    {
      text: 'abc',
      id: '1',
      isDone: false,
    },
    {
      text: 'ghj',
      id: '2',
      isDone: false,
    },
    {
      text: 'tyu',
      id: '3',
      isDone: false,
    },

  ],
  visibleTodos: [
    {
      text: 'abc',
      id: '1',
      isDone: false,
    },
    {
      text: 'ghj',
      id: '2',
      isDone: false,
    },
    {
      text: 'tyu',
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
