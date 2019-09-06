import { loadMeetups } from "../actions/eventActions";
import OAuth2 from "fetch-mw-oauth2";

// import dotenv from "dotenv";
// require("dotenv").config();
// dotenv.config();

// console.log(process.env.API_URL);
export const getMeetups = () => dispatch => {
  const oauth2 = new OAuth2({
    grantType: "authorization_code",
    clientId: "q1fohjci2h5eiinm0697g4vnhp",
    clientSecret: "fa8v7iqppsf2prpmlc65619thv",
    // Authorization:
    // "https://cors-anywhere.herokuapp.com/https://secure.meetup.com/oauth2/authorize",
    accessToken: "4f21d39612d68da91d761c49366586dc",
    tokenEndpoint:
      "https://cors-anywhere.herokuapp.com/https://secure.meetup.com/oauth2/access"
  });
  /*return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?key=13a6c19667bd255232452d766c2f6c&sign=true&format=json&photo-host=public&topic_category=witi`,
    { mode: "cors" }) */
  return oauth2
    .fetch(
      "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?format=json&photo-host=public&topic_category=witi"
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
