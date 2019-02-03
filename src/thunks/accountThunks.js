import { registerUser, loginUser } from "../actions/accountActions";

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

export const authenticateUser = loginInfo => dispatch => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login_info: loginInfo })
  })
    .then(res => res.json())
    .then(membership => {
      const currentUser = {
        token: membership.jwt,
        membershipInfo: membership.member
      };
      dispatch(loginUser(currentUser));
    });
};
