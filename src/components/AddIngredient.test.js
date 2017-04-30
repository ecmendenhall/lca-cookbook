import React from 'react';
import ReactDOM from 'react-dom';
import AddIngredient from './components/AddIngredient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddIngredient />, div);
});
