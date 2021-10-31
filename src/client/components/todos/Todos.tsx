import React from 'react';
import { useSelector } from 'react-redux';
import { IStore, ITodo } from '../../types';
import Todo from '../todo/Todo';

export default function Todos(): JSX.Element {
  const todos = useSelector((store: IStore) => store.todos);

  return (
    <div>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
