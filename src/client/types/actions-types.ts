import { ITodo } from './store-types';

export enum Actions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_DONE = 'TOGGLE_DONE',
}

export interface AddTodo {
  type: Actions.ADD_TODO;
  payload: ITodo;
}
