import React, { Component } from "react";
import Meetup from "./meetup";
import { connect } from "react-redux";
import { getMeetups } from "../thunks/eventThunks";

class MeetupEvents extends Component {
  constructor(props) {
    super(props);

    this.props.getMeetups();
  }

  render() {
    const meetups = this.props.meetups.map((meetup, i) => (
      <Meetup key={i} meetup={meetup} />
    ));

    return (
      <div>
        <table className="ui striped table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Sponsor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{meetups}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { meetups: state.eventsInfo.meetups };
};

const mapDispatchToProps = dispatch => {
  return { getMeetups: () => dispatch(getMeetups()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetupEvents);
