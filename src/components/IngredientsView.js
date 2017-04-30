import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ingredientsActions from '../actions/ingredients-actions';
import AddIngredient from './AddIngredient'
import IngredientsList from './IngredientsList'
import IngredientsSummary from './IngredientsSummary'
import IngredientsChart from './IngredientsChart'
import uuid from 'uuid/v4'

class IngredientsView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ingredients: []
    }
    this.addIngredient = this.addIngredient.bind(this)
    this.removeIngredient = this.removeIngredient.bind(this)
    this.setQuantity = this.setQuantity.bind(this)
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

  setQuantity(id, quantity) {
    this.props.actions.setIngredientQuantity(id, quantity);
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-6">
        <AddIngredient addIngredient={ this.addIngredient } />
        <IngredientsList ingredients={ this.props.ingredients } removeIngredient={ this.removeIngredient } setQuantity={ this.setQuantity }/>
        <div className="charts">
        <IngredientsChart ingredients={ this.props.ingredients } />
        </div>
        </div>
        <div className="col-md-6">
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
