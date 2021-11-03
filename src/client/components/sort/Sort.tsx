import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateSortSettings, UpdateVisibleTodos } from '../../store/actions';
import { IStore } from '../../types';

export default function Sort(): JSX.Element {
  const dispatch = useDispatch();

  const searchSettings = useSelector((store: IStore) => store.searchSettings);

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
    <div>
      <input value={searchSettings.searchText} onChange={onInputChange} />
      <button data-btntype="All" onClick={onClickButtonHandler} type="button">All</button>
      <button data-btntype="Active" onClick={onClickButtonHandler} type="button">Active</button>
      <button data-btntype="Completed" onClick={onClickButtonHandler} type="button">Completed</button>
    </div>
  );
}
