import React, { Component } from "react";

class FilterCoupons extends Component {
  render() {
    return (
      <div className="ui fluid icon input" id="coupon-search">
        <input
          className="prompt"
          type="text"
          placeholder="Search for access pass..."
          onChange={e => this.props.filterHandler(e.target.value)}
        />
        <i className="search icon" />
      </div>
    );
  }
}

export default FilterCoupons;
