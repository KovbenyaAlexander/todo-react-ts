import { ITodo, Actions, IStore } from '../types';

import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.ADD_TODO; payload: ITodo } |
  { type: typeof Actions.REMOVE_TODO; payload: string } |
  { type: typeof Actions.TOGGLE_DONE; payload: string };
export default function reducer(state: IStore = initialStore, action: AllActions): IStore {
  console.log(action);
  switch (action.type) {
    case Actions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case Actions.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload) };
    case Actions.TOGGLE_DONE:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}