import React from 'react';
import './style.scss';
import Todos from './components/todos/Todos';
import Form from './components/form/Form';
import Sort from './components/sort/Sort';

const App = (): JSX.Element => (
  <>
    <Sort />
    <Todos />
    <Form />
  </>
);

export default App;
