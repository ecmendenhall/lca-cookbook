import React, { Component } from 'react';
import Select from 'react-select';


class AddIngredient extends Component {

  constructor(props) {
    super(props);

    this.addIngredient = this.addIngredient.bind(this)
    this.onInputKeyDown = this.onInputKeyDown.bind(this)
  }

  addIngredient() {
    let option = this.refs.addIngredient.getFocusedOption();
    if (option) {
      this.props.addIngredient(option.value);
    }
  }

  onInputKeyDown(event) {
    switch (event.keyCode) {
    case 13:
      this.addIngredient();
      break;
    default:
      break;
    }
  }

  render() {
    return (
        <div className="add-ingredient">
        <Select ref='addIngredient' placeholder="Add an ingredient..." options={ [{value: 'Chicken', label: 'Chicken'}, {value: 'Rice', label: 'Rice'}, {value: 'Broccoli', label: 'Broccoli'}, {value: 'Asparagus', label: 'Asparagus'}]} onInputKeyDown={ this.onInputKeyDown } onValueClick={ this.addIngredient } clearable={false}/>
        </div>
    );
  }
}

export default AddIngredient;
