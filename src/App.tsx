import React from 'react';
import './style.scss';
import Todos from './components/todos/Todos';
import Form from './components/form/Form';
import Sort from './components/sort/Sort';
import Header from './components/header/Header';

const App = (): JSX.Element => (
  <div className="app">
    <Header />
    <Form />
    <Todos />
    <Sort />
  </div>
);

export default App;
