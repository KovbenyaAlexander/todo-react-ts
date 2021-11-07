/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
// import M from 'materialize-css';
import { Button, Icon } from 'react-materialize';

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
    <div className="todo">
      <div>
        <input type="checkbox" checked={todo.isDone} onChange={onToggleDoneHandler} />
        <span>{todo.text}</span>
      </div>

      <span onClick={removeTodoHandler} className="material-icons todo__icon">
        delete
      </span>

    </div>
  );
}

/*

        <Button waves='light'>
      <Icon>thumb_up</Icon>
    </Button>

*/
