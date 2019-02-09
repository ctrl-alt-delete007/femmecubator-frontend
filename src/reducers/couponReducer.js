const initialState = {
  coupons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_COUPONS": {
      debugger;
      return { coupons: action.payload };
    }
    case "ADD_COUPON": {
      return { ...state, coupons: [...state.coupons, action.payload] };
    }
    default:
      return state;
  }
};

export default reducer;
