import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
  case types.ADD_INGREDIENT:
    return [...state, Object.assign({}, action.ingredient)];
  case types.REMOVE_INGREDIENT:
    return state.filter(ingredient => ingredient.id !== action.id);
  default:
    return state;
  }
};
