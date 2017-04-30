import React, { Component } from 'react';


class AddIngredient extends Component {

  constructor(props) {
    super(props);

    this.addIngredient = this.addIngredient.bind(this)
  }

  addIngredient() {
    this.props.addIngredient(this.refs.addIngredient.value);
  }

  render() {
    return (
        <div className="add-ingredient">
          <input ref='addIngredient' placeholder="Add an ingredient..." />
          <button onClick={ this.addIngredient }>Add</button>
        </div>
    );
  }
}

export default AddIngredient;
