import { registerUser } from "../actions/accountActions";

export const createUser = userInfo => dispatch => {
  return fetch("http://localhost:3000/api/v1/members", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_info: userInfo })
  })
    .then(res => res.json())
    .then(membership => {
      const currentUser = {
        token: membership.jwt,
        membershipInfo: membership.member
      };
      dispatch(registerUser(currentUser));
    });
};
