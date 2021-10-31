import { ITodo, Actions, IStore } from '../types';

import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.ADD_TODO; payload: ITodo };

export default function reducer(state: IStore = initialStore, action: AllActions) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}
