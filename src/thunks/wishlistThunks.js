import { addToWishList } from "../actions/wishlistActions";

export const createWishList = wishlist => dispatch => {
  return fetch(
    `https://combined-backend.herokuapp.com/femmecubator/api/v1/members/${
      wishlist.member_id
    }/wishlists`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({ wishlist: wishlist })
    }
  )
    .then(res => res.json())
    .then(data => dispatch(addToWishList(data)));
};
