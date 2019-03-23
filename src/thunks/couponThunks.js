import { addCoupon, loadCoupons } from "../actions/couponActions";

export const createCoupon = couponInfo => dispatch => {
  return fetch(
    "https://combined-backend.herokuapp.com/femmecubator/api/v1/coupons",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({ coupon_info: couponInfo })
    }
  )
    .then(res => res.json())
    .then(coupon => dispatch(addCoupon(coupon)));
};

export const getCoupons = () => dispatch => {
  return fetch(
    "https://combined-backend.herokuapp.com/femmecubator/api/v1/coupons",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      }
    }
  )
    .then(res => res.json())
    .then(coupons => dispatch(loadCoupons(coupons)));
};
