import { loadMeetups } from "../actions/eventActions";

export const getMeetups = () => dispatch => {
  return fetch(`${process.env.API_URL}`, { mode: "cors" })
    .then(resp => resp.json())
    .then(data => {
      const meetups = data.events.map(meetup => {
        return {
          id: meetup.id,
          name: meetup.name,
          sponsor: meetup.group.name,
          event_date: meetup.local_date,
          event_time: meetup.local_time,
          url: meetup.link,
          location: meetup.group.localized_location
        };
      });

      return dispatch(loadMeetups(meetups));
    });
};
