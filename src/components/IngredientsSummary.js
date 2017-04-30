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

  technosphereData() {
    let dataArrays = this.props.ingredients.map(i => i.fromTechnoSphere).filter(i => i !== undefined);
    let dataItems = [].concat.apply([], dataArrays);
    let groupedItems = _.groupBy(dataItems, 'name');
    return Object.keys(groupedItems).map((k) => {
      return {
        name: groupedItems[k][0].name,
        amount: groupedItems[k].reduce((acc, item) => acc + item.amount , 0),
        unit: groupedItems[k][0].unit
      };
    });
  }

  technosphereDataRows() {
    return this.rowsFromData(this.technosphereData());
  }

  fromEnvironmentData() {
    let dataObjects = this.props.ingredients.map(i => i.fromEnvironment).filter(i => i !== undefined);
    let dataArrays = dataObjects.map(i => i.naturalResource).filter(i => i !== undefined);
    let dataItems = [].concat.apply([], dataArrays);
    let groupedItems = _.groupBy(dataItems, 'name');
    return Object.keys(groupedItems).map((k) => {
      return {
        name: groupedItems[k][0].name,
        amount: groupedItems[k].reduce((acc, item) => acc + item.amount , 0),
        unit: groupedItems[k][0].unit
      };
    });
  }

  fromEnvironmentDataRows() {
    return this.rowsFromData(this.fromEnvironmentData());
  }

  toEnvironmentData() {
    let dataObjects = this.props.ingredients.map(i => i.toEnvironment).filter(i => i !== undefined);
    let airArrays = dataObjects.map(i => i.air).filter(i => i !== undefined);
    let soilArrays = dataObjects.map(i => i.soil).filter(i => i !== undefined);
    let waterArrays = dataObjects.map(i => i.water).filter(i => i !== undefined);
    let dataItems = [].concat.apply([], airArrays.concat(soilArrays, waterArrays));
    let groupedItems = _.groupBy(dataItems, 'name');
    return Object.keys(groupedItems).map((k) => {
      return {
        name: groupedItems[k][0].name,
        amount: groupedItems[k].reduce((acc, item) => acc + item.amount , 0),
        unit: groupedItems[k][0].unit
      };
    });
  }

  toEnvironmentDataRows() {
    return this.rowsFromData(this.toEnvironmentData());
  }

  render() {
    return (
      <div className='ingredients-summary'>
        <div className='from-technosphere'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Units</th>
            </tr>
          </thead>
        <tbody>
            <tr><td colspan="3">From the technosphere</td></tr>
            { this.technosphereDataRows() }
          </tbody>
          <tbody>
            <tr><td colspan="3">From the environment</td></tr>
            { this.fromEnvironmentDataRows() }
          </tbody>
          <tbody>
            <tr><td colspan="3">To the environment</td></tr>
            { this.toEnvironmentDataRows() }
          </tbody>
        </table>
        </div>
        </div>
    );
  }
}

export default IngredientsSummary;
