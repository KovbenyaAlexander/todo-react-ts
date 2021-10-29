import { ITodo } from './store-types';

export enum Actions {
  ADD_TODO = 'ADD_TODO',
}

export interface AddTodo {
  type: Actions.ADD_TODO;
  payload: ITodo;
}
