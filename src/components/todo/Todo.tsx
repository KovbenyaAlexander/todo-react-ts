/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../types';
import { RemoveTodo, ToggleDone, UpdateVisibleTodos } from '../../store/actions';
import './style.scss';

export default function Todo({ todo }: { todo: ITodo }): JSX.Element {
  const dispatch = useDispatch();

  const removeTodoHandler = () => {
    dispatch(RemoveTodo(todo.id));
    dispatch(UpdateVisibleTodos());
  };

  const onToggleDoneHandler = () => {
    dispatch(ToggleDone(todo.id));
    dispatch(UpdateVisibleTodos());
  };

  return (
    <div className="todo" onClick={onToggleDoneHandler}>

      <input id={todo.id} type="checkbox" checked={todo.isDone} onClick={onToggleDoneHandler}/>
      <label htmlFor={todo.id}>
        <span className={todo.isDone ? 'todo-inactive' : ''}>{todo.text}</span>
        <svg viewBox="0 0 100 100">
          <path d="M 10 10 L 90 90" />
          <path d="M 90 10 L 10 90" />
        </svg>
      </label>

      <span onClick={removeTodoHandler} className="material-icons todo__remove-icon">
        delete
      </span>

    </div>
  );
}
