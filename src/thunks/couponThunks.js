import { addCoupon } from "../actions/couponActions";

export const createCoupon = couponInfo => dispatch => {
  return fetch("http://localhost:3000/api/v1/coupons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify({ coupon_info: couponInfo })
  })
    .then(res => res.json())
    .then(coupon => dispatch(addCoupon(coupon)));
};
