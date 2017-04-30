import React, { Component } from 'react';


class Ingredient extends Component {

  constructor(props) {
    super(props);

    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(event) {
    this.props.setQuantity(parseFloat(event.target.value) || 0.0);
  }

  render() {
    return(
        <tr>
        <td className='ingredient-name'>{ this.props.name }</td>
        <td className="quantity">
          <input type="number" min="0" step="0.01" value={ this.props.quantity } onChange={ this.setQuantity }/><label>kg</label>
        <button className='remove' onClick={ this.props.remove }>x</button>
        </td>
        </tr>
    );
  }

}

export default Ingredient;
