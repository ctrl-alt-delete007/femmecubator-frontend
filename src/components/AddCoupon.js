import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createCoupon } from "../thunks/couponThunks";
import { fetchCurrentUser } from "../thunks/accountThunks";
class AddCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupon_code: "",
      sponsor: "",
      description: "",
      expiration: "",
      error: ""
    };

    this.props.fetchCurrentUser();

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.submitHandler} className="ui form">
          <div className="field">
            <label htmlFor="coupon_code">Coupon Code: </label>
            <input
              className="ui input"
              type="text"
              onChange={this.changeHandler}
              name="coupon_code"
              id="coupon_code"
              value={this.state.coupon_code}
            />
          </div>
          <div className="field">
            <label htmlFor="sponsor">Sponsor: </label>
            <input
              className="ui input"
              type="text"
              onChange={this.changeHandler}
              name="sponsor"
              id="sponsor"
              value={this.state.sponsor}
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description: </label>
            <input
              className="ui input"
              type="text"
              onChange={this.changeHandler}
              name="description"
              value={this.state.description}
              id="description"
            />
          </div>
          <div className="field">
            <label htmlFor="expiration">Expiration Date: </label>
            <input
              className="ui input"
              type="date"
              onChange={this.changeHandler}
              name="expiration"
              id="expiration"
              value={this.state.expiration}
            />
          </div>
          <input className="ui button" type="submit" value="submit" />
          <div className="error-message">{this.state.error}</div>
        </form>
      </Fragment>
    );
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const couponInfo = {
      coupon_code: this.state.coupon_code,
      sponsor: this.state.sponsor,
      description: this.state.description,
      expiration: this.state.expiration,
      creator_id: this.props.currentUser.id
    };

    // coupon_code, sponsor, description, expiration

    if (
      this.state.coupon_code === "" ||
      this.state.sponsor === "" ||
      this.state.description === "" ||
      this.state.expiration === ""
    ) {
      this.setState({ error: "All fields are required! " });
    } else {
      this.props.createCoupon(couponInfo);
      this.setState({
        coupon_code: "",
        sponsor: "",
        description: "",
        expiration: "",
        error: ""
      });
      e.target.reset();
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCoupon: couponInfo => dispatch(createCoupon(couponInfo)),
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  };
};

const mapStateToProps = state => {
  return { currentUser: state.accountInfo.currentUser };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoupon);
