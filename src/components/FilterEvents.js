import React, { Component } from "react";

class FilterEvents extends Component {
  render() {
    return (
      <div className="ui fluid icon input" id="coupon-search">
        <input
          className="prompt"
          type="text"
          placeholder="Search for events, groups, from Meetup.com..."
          onChange={e => this.props.filterHandler(e.target.value)}
        />
        <i className="search icon" />
      </div>
    );
  }
}

export default FilterEvents;