import { ITodo, Actions } from '../types';
import { AllActions } from './reducers';

export function AddTodo(payload: ITodo): AllActions {
  return {
    type: Actions.ADD_TODO,
    payload,
  };
}
