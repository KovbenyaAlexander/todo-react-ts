import { ITodo, Actions } from '../types';
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

export function SetSearchText(payload: string): AllActions {
  return {
    type: Actions.SET_SEARCH_TEXT,
    payload,
  };
}
