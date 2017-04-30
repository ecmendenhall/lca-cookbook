import React, { Component } from 'react';
import './App.css';
import IngredientsView from './components/IngredientsView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <IngredientsView />
        </div>
      </div>
    );
  }
}

export default App;
