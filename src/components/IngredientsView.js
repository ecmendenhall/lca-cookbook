import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ingredientsActions from '../actions/ingredients-actions';
import AddIngredient from './AddIngredient'
import IngredientsList from './IngredientsList'
import IngredientsSummary from './IngredientsSummary'
import uuid from 'uuid/v4'

class IngredientsView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ingredients: []
    }
    this.addIngredient = this.addIngredient.bind(this)
    this.removeIngredient = this.removeIngredient.bind(this)
  }

  addIngredient(name) {
    this.props.actions.addIngredient({
      id: uuid(),
      name: name 
    });
  }

  removeIngredient(id) {
    this.props.actions.removeIngredient(id);
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-4">
          <AddIngredient addIngredient={ this.addIngredient }/>
          <IngredientsList ingredients={ this.props.ingredients } removeIngredient={ this.removeIngredient } />
        </div>
        <div className="col-md-8">
          <IngredientsSummary ingredients={ this.props.ingredients } />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ingredients: state.ingredients
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ingredientsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsView);
