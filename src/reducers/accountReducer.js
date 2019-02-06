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
    case "GET_CURRENT_USER_INFO": {
      return { ...state, isUserLoggedIn: true, currentUser: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
