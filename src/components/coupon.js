import React, { Component } from "react";
import { createWishList } from "../thunks/wishlistThunks";
import { connect } from "react-redux";

class Coupon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    };

    this.addToWishListHandler = this.addToWishListHandler.bind(this);
  }

  render() {
    const { coupon } = this.props;
    const tmp = this.props.user.wishlists || [{}];
    const wishItem = tmp.find(item => item.coupon_id === coupon.id) || {};

    return (
      <div className="card">
        <div className="content">
          <div className="header">{coupon.sponsor}</div>
          <div className="description">{coupon.description}</div>
          <div className="description">{coupon.expiration}</div>
          <div
            className={
              "ui bottom attached button" +
              (coupon.id === wishItem.coupon_id || this.state.isClicked
                ? " disabled"
                : "")
            }
            onClick={this.addToWishListHandler}
            style={{ backgroundColor: "#5de0b5" }}
          >
            <span className="wishlist-btn-txt">add to wishlist</span>
          </div>
        </div>
      </div>
    );
  }

  addToWishListHandler() {
    this.setState({ isClicked: true });

    const wishlist = {
      member_id: this.props.user.id,
      coupon_id: this.props.coupon.id
    };
    this.props.addToWishList(wishlist);
  }
}

const mapDispatchToProps = dispatch => {
  return { addToWishList: wishlist => dispatch(createWishList(wishlist)) };
};

export default connect(
  null,
  mapDispatchToProps
)(Coupon);
