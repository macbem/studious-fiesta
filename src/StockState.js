import React, { Component } from 'react';
import StockList from './StockList.js';
import StockFilter from './StockFilter.js';

let data = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class StockState extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data.sort((a, b) => a.category.toLowerCase() > b.category.toLowerCase()), filterQuery: '', stockedOnly: false };
  }
  updateFilterQuery = (event) => {
    this.setState({filterQuery: event.target.value});
  }
  updateStockedOnlyState = (event) => {
    let val = !this.state.stockedOnly;
    this.setState({stockedOnly: val});
  }
  render() {
    return (
      <div>
        <StockFilter
          updateFilterQuery={this.updateFilterQuery}
          filterQuery={this.state.filterQuery}
          stockedOnly={this.state.stockedOnly}
          updateStockedOnlyState={this.updateStockedOnlyState}
        />

        <StockList
          filterQuery={this.state.filterQuery}
          stockedOnly={this.state.stockedOnly}
          products={this.state.data}
        />
      </div>
    );
  }
}

export default StockState;
