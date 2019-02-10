const initialState = {
  coupons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_COUPONS": {
      return { ...state, coupons: action.payload.coupons };
    }
    case "ADD_COUPON": {
      return { ...state, coupons: [...state.coupons, action.payload.coupon] };
    }
    default:
      return state;
  }
};

export default reducer;
