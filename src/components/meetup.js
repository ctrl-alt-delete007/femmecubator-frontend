import React, { Component } from "react";

class Meetup extends Component {
  render() {
    const { meetup } = this.props;
    return (
      <tr>
        <td>
          <a href={meetup.url}>{meetup.name}</a>
        </td>
        <td>{meetup.sponsor}</td>
        <td>{meetup.local_date}</td>
        <td>{meetup.local_time}</td>
        <td>{meetup.location}</td>
      </tr>
    );
  }
}

export default Meetup;
