import React from 'react';
import './style.scss';
import Todos from './components/todos/Todos';
import Form from './components/form/Form';

const App = (): JSX.Element => (
  <>
    <Todos />
    <Form />
  </>
);

export default App;
