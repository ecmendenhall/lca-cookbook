import React, { Component } from 'react';
import {BarChart, Bar, Tooltip, YAxis, XAxis } from 'recharts';
import { technosphereData } from '../services/data-service';
import _ from 'lodash';
import uuid from 'uuid/v4'

class IngredientsChart extends Component {

  dataByUnits() {
    return _.groupBy(this.chartData(), 'unit');
  }

  chartData() {
    return technosphereData(this.props.ingredients).map((i) => {
      return {
        name: i.name,
        amount: parseFloat(i.amount) || 0,
        unit: i.unit
      };
    }
    );
  }

  allUnits() {
    return _.keys(this.dataByUnits());
  }

  barCharts(dataByUnits) {
    return this.allUnits().map((unit) => {
      return <BarChart key={ uuid() } width={ 300 } height={ 200 } data={ dataByUnits[unit] } margin={{ top: 20, right: 5, bottom: 20, left: 5 }}>
        <Bar dataKey="amount" fill="#dedfe5" />
        <YAxis label={ unit }  />
        <XAxis dataKey="name" />
        <Tooltip />
      </BarChart>
    });
  }

  render() {
    return (
        //<BarChart width={ 300 } height={ 200 } data={ this.chartData() }>
        //  <Bar dataKey="amount" fill="#6a739b" />
        //</BarChart>
        <div>
        { this.barCharts(this.dataByUnits()) }
        </div>
    );
  }
}

export default IngredientsChart;
