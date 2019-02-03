const initialState = {
  currentUser: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      return { ...state, currentUser: action.payload };
    }
    case "REGISTER_USER": {
      return { ...state, currentUser: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
