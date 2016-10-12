import React, { Component } from 'react';

class StockFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {placeholder: 'Type a filter query'}
  }
  render() {
    return (
      <form>
        <input type="text" value={this.props.filterQuery} placeholder={this.state.placeholder} onChange={this.props.updateFilterQuery}/>
        <p>In stock only: <input type="checkbox" checked={this.props.stockedOnly} onChange={this.props.updateStockedOnlyState}/></p>
      </form>
    );
  }
}

export default StockFilter;
