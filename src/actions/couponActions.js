export const addCoupon = couponInfo => ({
  type: "ADD_COUPON",
  payload: couponInfo
});

export const loadCoupons = coupons => ({
  type: "LOAD_COUPONS",
  payload: coupons
});
