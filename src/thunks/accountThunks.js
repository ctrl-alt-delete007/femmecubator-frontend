// import { pushState } from "react-router";
import jwt from "jwt-simple";
import {
  registerUser,
  loginUser,
  fetchCurrentUserInfo,
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

      const userInfo = JSON.stringify(currentUser.membershipInfo);
      localStorage.setItem("userInfo", jwt.encode(userInfo, "$ec123t"));

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

      const userInfo = JSON.stringify(currentUser.membershipInfo);
      localStorage.setItem("userInfo", jwt.encode(userInfo, "$ec123t"));

      dispatch(loginUser(currentUser));
    });
};

export const fetchCurrentUser = () => dispatch => {
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

      const userInfo = JSON.stringify(currentUser.membershipInfo);
      localStorage.setItem("userInfo", jwt.encode(userInfo, "$ec123t"));

      dispatch(fetchCurrentUserInfo(currentUser));
    })
    .catch(error => {
      // debugger;
      if (error.message === "401") {
        dispatch(loginUserFailure());
        // dispatch(pushState(null, "/login"));
      }
    });
};
