import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddTodo, UpdateVisibleTodos } from '../../store/actions';
import { ITodo } from '../../types';
import './style.scss';

export default function Form(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!inputValue) return;

    const newTodo: ITodo = {
      text: inputValue,
      id: uuidv4(),
      isDone: false,
    };

    dispatch(AddTodo(newTodo));
    dispatch(UpdateVisibleTodos());
    setInputValue('');
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <input className="form__input" value={inputValue} onChange={onInputChange} placeholder="Create a new todo..." />
    </form>
  );
}
