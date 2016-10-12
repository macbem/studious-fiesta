import React, { Component } from 'react';
import uuid from 'uuid';
import {StockRow, StockRowCategory} from './StockRow';
import './index.css';

class StockList extends Component {
  render() {

    let rows = [],
        lastCategory = null;

    this.props.products.map(function(item) {
      if (item.name.toLowerCase().indexOf(this.props.filterQuery.toLowerCase()) === -1 || (!item.stocked && this.props.stockedOnly)) { return true;}
      if (item.category !== lastCategory) {
        rows.push(<StockRowCategory category={item.category} key={uuid.v4()} />);
        lastCategory = item.category;
      }
      rows.push(<StockRow name={item.name} stocked={item.stocked} price={item.price} key={uuid.v4()} />);
      return true;
    }.bind(this));
    return (
      <div className="StockList">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StockList;
