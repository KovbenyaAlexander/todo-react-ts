import { ITodo, ISearchSettings } from './store-types';

export enum Actions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_DONE = 'TOGGLE_DONE',
  UPDATE_SORT_SETTINGS = 'UPDATE_SORT_SETTINGS',
  UPDATE_VISIBLE_TODOS = 'UPDATE_VISIBLE_TODOS',
}

export interface AddTodo {
  type: Actions.ADD_TODO;
  payload: ITodo;
}
