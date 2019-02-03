import React, { Component } from "react";
import Meetup from "./meetup";
import { connect } from "react-redux";
import { getMeetups } from "../thunks/eventThunks";

class MeetupEvents extends Component {
  componentDidMount() {
    this.props.getMeetups();
  }
  render() {
    const meetups = this.props.meetups.map((meetup, i) => (
      <Meetup key={i} meetup={meetup} />
    ));
    return (
      <div>
        <ul>{meetups}</ul>
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
