import { ITodo, Actions, ISearchSettings } from '../types';
import { AllActions } from './reducers';

export function AddTodo(payload: ITodo): AllActions {
  return {
    type: Actions.ADD_TODO,
    payload,
  };
}

export function RemoveTodo(payload: string): AllActions {
  return {
    type: Actions.REMOVE_TODO,
    payload,
  };
}

export function ToggleDone(payload: string): AllActions {
  return {
    type: Actions.TOGGLE_DONE,
    payload,
  };
}

export function UpdateSortSettings(payload: ISearchSettings): AllActions {
  return {
    type: Actions.UPDATE_SORT_SETTINGS,
    payload,
  };
}

export function UpdateVisibleTodos(): AllActions {
  return {
    type: Actions.UPDATE_VISIBLE_TODOS,
  };
}
