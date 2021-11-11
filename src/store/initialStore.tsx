import { IStore } from '../types/store-types';

export const initialStore: IStore = {
  todos: [
    {
      text: "Drag'n'Drop",
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
      text: "Drag'n'Drop",
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
