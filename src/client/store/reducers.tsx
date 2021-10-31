import { ITodo, Actions, IStore } from '../types';

import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.ADD_TODO; payload: ITodo } |
  { type: typeof Actions.REMOVE_TODO; payload: string };

export default function reducer(state: IStore = initialStore, action: AllActions): IStore {
  switch (action.type) {
    case Actions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case Actions.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload) };
    default:
      return state;
  }
}
