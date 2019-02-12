export const registerUser = userInfo => ({
  type: "REGISTER_USER",
  payload: userInfo
});

export const loginUser = userInfo => ({
  type: "LOGIN_USER",
  payload: userInfo
});

export const logoutUser = () => ({ type: "LOGOUT_USER" });

export const fetchCurrentUserInfo = userInfo => ({
  type: "FETCH_CURRENT_USER_INFO",
  payload: userInfo
});

export const loginUserFailure = () => ({ type: "LOGIN_USER_FAILURE" });

export const isUserLoggedIn = () => ({ type: "CHECK_TOKEN" });
