import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetSearchText } from '../../store/actions';
import { IStore } from '../../types';

export default function Sort(): JSX.Element {
  const dispatch = useDispatch();
  const searchText = useSelector((store: IStore) => store.searchText);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(SetSearchText(e.target.value));
  };

  return (
    <div>
      <input value={searchText} onChange={onInputChange} />
    </div>
  );
}
