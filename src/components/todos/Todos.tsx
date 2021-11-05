import React from 'react';
import { useSelector } from 'react-redux';
import { IStore, ITodo } from '../../types';
import Todo from '../todo/Todo';
import './style.scss';

export default function Todos(): JSX.Element {
  const todos = useSelector((store: IStore) => store.visibleTodos);

  return (
    <div className="todos">
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
