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
        <td>{new Date(meetup.event_date).toLocaleDateString("en-US")}</td>
        <td>
          {new Date(meetup.event_date + " " + meetup.event_time).toLocaleString(
            "en-US",
            {
              hour: "numeric",
              minute: "numeric",
              hour12: true
            }
          )}
        </td>
        <td>{meetup.location}</td>
      </tr>
    );
  }
}

export default Meetup;
