import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddTodo } from '../../store/actions';
import { ITodo } from '../../types';

export default function Form(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    const newTodo: ITodo = {
      text: inputValue,
      id: uuidv4(),
    };

    dispatch(AddTodo(newTodo));
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input value={inputValue} onChange={onInputChange} />
      <button type="submit"> Add </button>
    </form>
  );
}
