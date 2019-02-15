import jwt from "jwt-simple";

import {
  registerUser,
  loginUser,
  fetchCurrentUserInfo,
  loginUserFailure,
  updateCurrentUserInfo,
  registerUserFailure
} from "../actions/accountActions";

export const createUser = userInfo => dispatch => {
  return (
    fetch("http://localhost:3000/api/v1/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_info: userInfo })
    })
      // .then(res => res.json())
      .then(res => {
        if (res.statusText === "Created") {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then(membership => {
        localStorage.setItem("token", membership.jwt);

        const currentUser = {
          token: membership.jwt,
          membershipInfo: membership.member
        };

        const userInfo = JSON.stringify(currentUser.membershipInfo);
        localStorage.setItem("userInfo", jwt.encode(userInfo, "$ec123t"));

        dispatch(registerUser(membership.member));
      })
      .catch(error => {
        const registrationErrorData = { userInfo: userInfo, error: error };
        dispatch(registerUserFailure(registrationErrorData));
      })
  );
};

export const updateUser = userInfo => dispatch => {
  return fetch(`http://localhost:3000/api/v1/members/${userInfo.member_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify({ user_info: userInfo })
  })
    .then(res => res.json())
    .then(membership => {
      localStorage.setItem("token", membership.jwt);

      const userInfo = JSON.stringify(membership.member);

      localStorage.setItem("userInfo", jwt.encode(userInfo, "$ec123t"));

      dispatch(updateCurrentUserInfo(membership.member));
    });
};

export const authenticateUser = loginInfo => dispatch => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login_info: loginInfo })
  })
    .then(res => {
      if (res.status === 401)
        return res.json().then(err => {
          throw err;
        });
      else return res.json();
    })
    .then(membership => {
      localStorage.setItem("token", membership.jwt);

      const currentUser = {
        token: membership.jwt,
        membershipInfo: membership.member
      };

      const userInfo = JSON.stringify(currentUser.membershipInfo);
      localStorage.setItem("userInfo", jwt.encode(userInfo, "$ec123t"));

      dispatch(loginUser(membership.member));
    })
    .catch(error => {
      dispatch(loginUserFailure(error));
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

      dispatch(fetchCurrentUserInfo(data.membership));
    })
    .catch(error => {
      if (error.message === "401") {
        dispatch(loginUserFailure("Unauthorized"));
      }
    });
};
