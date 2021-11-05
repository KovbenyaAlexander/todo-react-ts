import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateSortSettings, UpdateVisibleTodos } from '../../store/actions';
import { IStore, ITodo } from '../../types';
import './style.scss';

export default function Sort(): JSX.Element {
  const dispatch = useDispatch();

  const searchSettings = useSelector((store: IStore) => store.searchSettings);
  const todos = useSelector((store: IStore) => store.todos);

  const activeTodos = todos.filter((todo: ITodo) => !todo.isDone);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(UpdateSortSettings({ ...searchSettings, searchText: e.target.value }));
    dispatch(UpdateVisibleTodos());
  };

  const onClickButtonHandler = (e: any) => {
    dispatch(UpdateSortSettings({
      ...searchSettings,
      isShowActiveTodo: false,
      isShowAllTodo: false,
      isShowCompletedTodo: false,
      [`isShow${e.target.dataset.btntype}Todo`]: true,
    }));
    dispatch(UpdateVisibleTodos());
  };

  return (
    <div className="sort">
      <span className="sort__info">{`${activeTodos.length} items left`}</span>
      <div>
        <button data-btntype="All" onClick={onClickButtonHandler} type="button">All</button>
        <button data-btntype="Active" onClick={onClickButtonHandler} type="button">Active</button>
        <button data-btntype="Completed" onClick={onClickButtonHandler} type="button">Completed</button>
      </div>
      <input className="sort__search" value={searchSettings.searchText} onChange={onInputChange} />
    </div>
  );
}
