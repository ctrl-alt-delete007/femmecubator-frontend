import jwt from "jwt-simple";

const initialState = {
  currentUser: {},
  isUserLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      return { ...state, isUserLoggedIn: true, currentUser: action.payload };
    }
    case "REGISTER_USER": {
      return { ...state, currentUser: action.payload };
    }
    case "LOGIN_USER_FAILURE": {
      return { ...state, isUserLoggedIn: false, currentUser: {} };
    }
    case "FETCH_CURRENT_USER_INFO": {
      return { ...state, isUserLoggedIn: true, currentUser: action.payload };
    }
    case "LOGOUT_USER": {
      localStorage.clear();
      return { ...state, isUserLoggedIn: false, currentUser: {} };
    }
    case "CHECK_TOKEN": {
      if (localStorage.getItem("token") !== null)
        return { ...state, isUserLoggedIn: true };
      else return { ...state, isUserLoggedIn: false };
    }
    case "GET_CURRENT_USER_FROM_STORE": {
      const userInfo = JSON.parse(
        jwt.decode(localStorage.getItem("userInfo"), "$ec123t")
      );
      return { ...state, currentUser: userInfo };
    }
    case "UPDATE_CURRENT_USER_INFO": {
      return { ...state, currentUser: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
