import { ITodo } from './store-types';

export enum Actions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

export interface AddTodo {
  type: Actions.ADD_TODO;
  payload: ITodo;
}

// export interface RemoveTodo {
//   type: Actions.ADD_TODO;
//   payload: ITodo;
// }
