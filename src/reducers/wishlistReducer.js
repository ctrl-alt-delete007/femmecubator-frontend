const initialState = {
  wishlists: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      return { ...state, wishlists: [...state.wishlists, action.payload] };
    }
    default:
      return state;
  }
};

export default reducer;
