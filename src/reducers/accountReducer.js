const initialState = {
  currentUser: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER": {
      return { ...state, currentUser: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
