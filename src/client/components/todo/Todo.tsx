/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../types';
import { RemoveTodo, ToggleDone } from '../../store/actions';

export default function Todo({ todo }: { todo: ITodo }): JSX.Element {
  const dispatch = useDispatch();

  const removeTodoHandler = () => {
    dispatch(RemoveTodo(todo.id));
  };

  const onToggleDoneHandler = () => {
    dispatch(ToggleDone(todo.id));
  };

  return (
    <div onClick={onToggleDoneHandler}>
      <span>{todo.text}</span>
      <span>
        {' '}
        {todo.isDone ? 'done' : 'not done'}
      </span>
      <button onClick={removeTodoHandler} type="button">Remove</button>
      <hr />
    </div>
  );
}
