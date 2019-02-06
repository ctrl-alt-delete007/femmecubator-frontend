// import { pushState } from "react-router";
import {
  registerUser,
  loginUser,
  getCurrentUserInfo,
  loginUserFailure
} from "../actions/accountActions";

export const createUser = userInfo => dispatch => {
  return fetch("http://localhost:3000/api/v1/members", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_info: userInfo })
  })
    .then(res => res.json())
    .then(membership => {
      localStorage.setItem("token", membership.jwt);
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
      localStorage.setItem("token", membership.jwt);
      const currentUser = {
        token: membership.jwt,
        membershipInfo: membership.member
      };
      dispatch(loginUser(currentUser));
    });
};

export const getCurrentUser = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/current_user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => {
      if (res.status === 401) throw new Error(res.status);
      else return res.json();
    })
    .then(data => {
      const currentUser = {
        membershipInfo: data.membership
      };
      dispatch(getCurrentUserInfo(currentUser));
    })
    .catch(error => {
      // debugger;
      if (error.message === "401") {
        dispatch(loginUserFailure());
        // dispatch(pushState(null, "/login"));
      }
    });
};
