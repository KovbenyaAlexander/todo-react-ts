import {
  ITodo, Actions, IStore, ISearchSettings,
} from '../types';

import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.ADD_TODO; payload: ITodo } |
  { type: typeof Actions.REMOVE_TODO; payload: string } |
  { type: typeof Actions.TOGGLE_DONE; payload: string } |
  { type: typeof Actions.UPDATE_SORT_SETTINGS; payload: ISearchSettings } |
  { type: typeof Actions.UPDATE_VISIBLE_TODOS };

export default function reducer(state: IStore = initialStore, action: AllActions): IStore {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case Actions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload),
      };
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
    case Actions.UPDATE_SORT_SETTINGS:
      return {
        ...state,
        searchSettings: action.payload,
      };
    case Actions.UPDATE_VISIBLE_TODOS:
      if (state.searchSettings.isShowAllTodo) {
        return {
          ...state,
          visibleTodos: state.todos.filter(
            (todo: ITodo) => state.searchSettings.searchText === todo.text.slice(0, state.searchSettings.searchText.length).toUpperCase(),
          ),
        };
      }

      if (state.searchSettings.isShowActiveTodo) {
        return {
          ...state,
          visibleTodos: state.todos.filter((todo: ITodo) => {
            if (state.searchSettings.searchText === todo.text.slice(0, state.searchSettings.searchText.length).toUpperCase()
            && !todo.isDone) {
              return true;
            }
            return false;
          }),
        };
      }

      if (state.searchSettings.isShowCompletedTodo) {
        return {
          ...state,
          visibleTodos: state.todos.filter((todo: ITodo) => {
            if (state.searchSettings.searchText === todo.text.slice(0, state.searchSettings.searchText.length).toUpperCase()
            && todo.isDone) {
              return true;
            }
            return false;
          }),
        };
      }

      return {
        ...state,
      };
    default:
      return state;
  }
}
