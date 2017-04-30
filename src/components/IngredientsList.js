import React, { Component } from 'react';
import Ingredient from './Ingredient'

class IngredientsList extends Component {

  render() {
    return (
      <div className='ingredients-list'>
        <table>
          <tbody>
            { this.props.ingredients.map((i) => <Ingredient {...i} key={ i.id }  remove={ this.props.removeIngredient.bind(this, i.id) } setQuantity={ this.props.setQuantity.bind(this, i.id) }/>) }
        </tbody>
      </table>
      </div>
    );
  }
}

export default IngredientsList;
