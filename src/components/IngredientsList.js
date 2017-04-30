import React, { Component } from 'react';
import Ingredient from './Ingredient'

class IngredientsList extends Component {

  render() {
    return (
      <div className='ingredients-list'>
      <ul className='list-unstyled' >
        { this.props.ingredients.map((i) => <Ingredient key={ i.id } name={ i.name } remove={ this.props.removeIngredient.bind(this, i.id) }/>) }
      </ul>
      </div>
    );
  }
}

export default IngredientsList;
