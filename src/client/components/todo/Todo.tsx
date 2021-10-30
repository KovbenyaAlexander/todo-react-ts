import React from 'react';
import { ITodo } from '../../types';

export default function Todo({ todo }: { todo: ITodo }): JSX.Element {
  return (
    <div>
      {todo.description}
      {todo.title}
    </div>
  );
}
