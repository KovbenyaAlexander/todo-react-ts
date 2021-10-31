import React from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../types';
import { RemoveTodo } from '../../store/actions';

export default function Todo({ todo }: { todo: ITodo }): JSX.Element {
  const dispatch = useDispatch();

  const removeTodoHandler = () => {
    dispatch(RemoveTodo(todo.id));
  };

  return (
    <div>
      {todo.text}
      <button onClick={removeTodoHandler} type="button">Remove</button>
    </div>
  );
}
