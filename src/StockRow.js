import React, { Component } from 'react';

class StockRowCategory extends Component {
  render() {
    return (
      <tr><td className="category" colSpan="2">{this.props.category}</td></tr>
    );
  }
}


class StockRow extends Component {
  render() {
    return (
      <tr>
        <td style={this.props.stocked ? {} : {color: 'red'}}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export {StockRowCategory, StockRow};
