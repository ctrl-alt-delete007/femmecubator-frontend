import React, { Component, Fragment } from "react";
import Meetup from "./meetup";
import { connect } from "react-redux";
import { getMeetups } from "../thunks/eventThunks";
import FilterEvents from "./FilterEvents";

class MeetupEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: ""
    };

    this.props.getMeetups();

    this.filterHandler = this.filterHandler.bind(this);
  }

  render() {
    const filteredEvents = this.props.meetups.filter(meetup =>
      meetup.name.toLowerCase().includes(this.state.q.toLowerCase())
    );

    const meetups = filteredEvents.map((meetup, i) => (
      <Meetup key={i} meetup={meetup} />
    ));

    return (
      <Fragment>
        <div className="Introducing-Access-P">
          <span className="header-title">Women in Tech Events</span>
          <p className="header-subtitle">
            Easily search events, classes, groups from Meetup.com
          </p>
        </div>

        <FilterEvents filterHandler={this.filterHandler} />

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
      </Fragment>
    );
  }

  filterHandler(q) {
    this.setState({ q });
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
