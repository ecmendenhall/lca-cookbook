import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
  case types.ADD_INGREDIENT:
    return [...state, Object.assign({}, action.ingredient)];
  case types.REMOVE_INGREDIENT:
    return state.filter(ingredient => ingredient.id !== action.id);
  case types.SET_INGREDIENT_QUANTITY:
    return state.map((ingredient) => {
      if (ingredient.id === action.update.id) {
        return Object.assign({}, ingredient, {quantity: action.update.quantity});
      } else {
        return ingredient;
      }
    });
  default:
    return state;
  }
};
