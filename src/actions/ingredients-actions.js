import * as types from './types';
import { loadIngredient } from '../services/ingredients-service';

export const addIngredient = (ingredient) => {
  const ingredientData = loadIngredient(ingredient.name);
  let ingredientWithData = Object.assign(ingredient, ingredientData, {quantity: 1.0});
  return {
    type: types.ADD_INGREDIENT,
    ingredient: ingredientWithData
  };
}

export const removeIngredient = (id) => {
  return {
    type: types.REMOVE_INGREDIENT,
    id
  };
}

export const setIngredientQuantity = (id, quantity) => {
  return {
    type: types.SET_INGREDIENT_QUANTITY,
    update: {id: id, quantity: quantity}
  };
}
