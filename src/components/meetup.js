import React, { Component } from "react";

class Meetup extends Component {
  render() {
    const { meetup } = this.props;
    return (
      <React.Fragment>
        <li>
          <div>
            <a href={meetup.url}>{meetup.name}</a>
          </div>
          <div>{meetup.sponsor}</div>
          <div>{meetup.local_date}</div>
          <div>{meetup.local_time}</div>
          <div>{meetup.location}</div>
        </li>
      </React.Fragment>
    );
  }
}

export default Meetup;
