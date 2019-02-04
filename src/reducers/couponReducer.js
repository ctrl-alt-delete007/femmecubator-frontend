const initialState = {
  coupons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_COUPONS": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
