import React, { Component } from 'react';
import uuid from 'uuid/v4'
import _ from 'lodash';


class IngredientsSummary extends Component {

  rowsFromData(data) {
    return data.map(i => {
      return(
          <tr key={ uuid() }>
            <td>{ i.name }</td>
            <td>{ i.amount }</td>
            <td>{ i.unit }</td>
          </tr>
      );
    });
  }

  scaleValuesByQuantity(items) {
    return items.map(
      (item) => {
        return Object.assign({}, item, {amount: item.amount * 2});
      }
    );
  }

  combineItemsByName(items) {
    let groupedItems = _.groupBy(items, 'name');
    return Object.keys(groupedItems).map((k) => {
      return {
        name: groupedItems[k][0].name,
        amount: groupedItems[k].reduce((acc, item) => acc + item.amount , 0).toFixed(4),
        unit: groupedItems[k][0].unit
      };
    });
  }

  technosphereData() {
    let quantities = _.map(this.props.ingredients, 'quantity');
    let itemsByIngredient = _.map(this.props.ingredients, 'fromTechnoSphere');
    let scaledItemsByIngredient = itemsByIngredient.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let dataItems = _.flatten(_.concat(scaledItemsByIngredient));
    return _.reverse(_.sortBy(this.combineItemsByName(dataItems), 'amount'));
  }

  technosphereDataRows() {
    if (this.technosphereData().length > 0) {
      return(
          <tbody>
          <tr className='section-header'><td colSpan="3"><strong>From the technosphere</strong></td></tr>
          { this.rowsFromData(this.technosphereData()) }
        </tbody>
      );
    } else {
      return false;
    }
  }

  fromEnvironmentData() {
    let quantities = _.map(this.props.ingredients, 'quantity');
    let itemsByIngredient = _.map(this.props.ingredients, 'fromEnvironment.naturalResource');
    let scaledItemsByIngredient = itemsByIngredient.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let dataItems = _.flatten(_.concat(scaledItemsByIngredient));
    return _.reverse(_.sortBy(this.combineItemsByName(dataItems), 'amount'));
  }

  fromEnvironmentDataRows() {
    if (this.fromEnvironmentData().length > 0) {
      return(
          <tbody>
          <tr className='section-header'><td colSpan="3"><strong>From the environment</strong></td></tr>
          { this.rowsFromData(this.fromEnvironmentData()) }
        </tbody>
      );
    } else {
      return false;
    }
  }

  toEnvironmentData() {
    let quantities = _.map(this.props.ingredients, 'quantity');
    let airArrays = _.map(this.props.ingredients, 'toEnvironment.air') || [];
    let scaledAirArrays = airArrays.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let soilArrays = _.map(this.props.ingredients, 'toEnvironment.soil') || [];
    let scaledSoilArrays = soilArrays.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let waterArrays = _.map(this.props.ingredients, 'toEnvironment.water') || [];
    let scaledWaterArrays = waterArrays.map((items, ingredient_index) => {
      return items.map((item) => {
        return Object.assign({}, item, {amount: item.amount * quantities[ingredient_index]}) ;
      });
    })
    let dataItems = _.without(_.flatten(_.concat(scaledAirArrays, scaledSoilArrays, scaledWaterArrays)), undefined);
    return _.reverse(_.sortBy(this.combineItemsByName(dataItems), 'amount'));
  }

  toEnvironmentDataRows() {
    if (this.toEnvironmentData().length > 0) {
      return(
        <tbody>
          <tr className='section-header'><td colSpan="3"><strong>To the environment</strong></td></tr>
          { this.rowsFromData(this.toEnvironmentData()) }
        </tbody>
      );
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className='ingredients-summary'>
        <div className='from-technosphere'>
          <table className='table'>
            <thead className='table-header'>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Units</th>
              </tr>
            </thead>
            { this.technosphereDataRows() }
            { this.fromEnvironmentDataRows() }
            { this.toEnvironmentDataRows() }
          </table>
        </div>
      </div>
    );
  }
}

export default IngredientsSummary;
