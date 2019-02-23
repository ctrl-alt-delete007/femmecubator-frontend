import { loadMeetups } from "../actions/eventActions";

let api_key = process.env.key;

export const getMeetups = () => dispatch => {
  console.log(api_key);
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://api.meetup.com/find/upcoming_events?key=${api_key}&sign=true&format=json&photo-host=public&topic_category=witi`,
    { mode: "cors" }
  )
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
