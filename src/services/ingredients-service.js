import ingredientData from '../data/ingredients';

export const loadIngredient = (name) => {
  return ingredientData.ingredients.filter(i => i.name === name)[0];
}
