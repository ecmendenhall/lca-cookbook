import React, { Component } from 'react';


class Ingredient extends Component {

  render() {
    return(
        <li>
          { this.props.name + " "}
          <button onClick={ this.props.remove }>x</button>
        </li>
    );
  }

}

export default Ingredient;
