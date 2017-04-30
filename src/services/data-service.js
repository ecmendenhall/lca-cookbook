import _ from 'lodash';

const combineItemsByName = (items) => {
  let groupedItems = _.groupBy(items, 'name');
  return Object.keys(groupedItems).map((k) => {
    return {
      name: groupedItems[k][0].name,
      amount: groupedItems[k].reduce((acc, item) => acc + item.amount , 0).toFixed(4),
      unit: groupedItems[k][0].unit
    };
  });
}

export const technosphereData = (ingredients) => {
  let quantities = _.map(ingredients, 'quantity');
  let itemsByIngredient = _.map(ingredients, 'fromTechnoSphere');
  let scaledItemsByIngredient = itemsByIngredient.map((items, ingredient_index) => {
    return items.map((item) => {
      return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
    });
  })
  let dataItems = _.flatten(_.concat(scaledItemsByIngredient));
  return _.reverse(_.sortBy(combineItemsByName(dataItems), 'amount'));
}

export const fromEnvironmentData = (ingredients) => {
  let quantities = _.map(ingredients, 'quantity');
  let itemsByIngredient = _.map(ingredients, 'fromEnvironment.naturalResource');
  let scaledItemsByIngredient = itemsByIngredient.map((items, ingredient_index) => {
    return items.map((item) => {
      return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
    });
  })
  let dataItems = _.flatten(_.concat(scaledItemsByIngredient));
  return _.reverse(_.sortBy(combineItemsByName(dataItems), 'amount'));
}

export const toEnvironmentData = (ingredients) => {
    let quantities = _.map(ingredients, 'quantity');
    let airArrays = _.map(ingredients, 'toEnvironment.air') || [];
    let scaledAirArrays = airArrays.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let soilArrays = _.map(ingredients, 'toEnvironment.soil') || [];
    let scaledSoilArrays = soilArrays.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let waterArrays = _.map(ingredients, 'toEnvironment.water') || [];
    let scaledWaterArrays = waterArrays.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let dataItems = _.without(_.flatten(_.concat(scaledAirArrays, scaledSoilArrays, scaledWaterArrays)), undefined);
    return _.reverse(_.sortBy(combineItemsByName(dataItems), 'amount'));
}
