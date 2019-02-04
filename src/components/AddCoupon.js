import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createCoupon } from "../thunks/couponThunks";
import { getCurrentUser } from "../thunks/accountThunks";
class AddCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponInfo: {
        coupon_code: "",
        sponsor: "",
        description: "",
        expiration: ""
      },
      memberInfo: {}
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentUser();
    console.log("did mount", this.props.currentUser);
    // this.setState({ memberInfo: this.props.currentUser });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update", prevProps);
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <form action="">
          <ul>
            <li className="accountForms">
              <label htmlFor="coupon_code">Coupon Code: </label>
              <input
                type="text"
                onChange={this.changeHandler}
                name="coupon_code"
                id="coupon_code"
                value={this.state.coupon_code}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="sponsor">Sponsor: </label>
              <input
                type="text"
                onChange={this.changeHandler}
                name="sponsor"
                id="sponsor"
                value={this.state.sponsor}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="description">Description: </label>
              <input
                type="textarea"
                onChange={this.changeHandler}
                name="description"
                value={this.state.description}
                id="description"
              />
            </li>
            <li className="accountForms">
              <label htmlFor="expiration">Expiration Date: </label>
              <input
                type="date"
                onChange={this.changeHandler}
                name="expiration"
                id="expiration"
                value={this.state.expiration}
              />
            </li>
            <li className="accountForms">
              <input type="submit" value="submit" />
            </li>
          </ul>
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
    this.props.createCoupon(this.state);
    this.setState({
      coupon_code: "",
      sponsor: "",
      description: "",
      expiration: ""
    });
    e.target.reset();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCoupon: couponInfo => dispatch(createCoupon(couponInfo)),
    getCurrentUser: () => dispatch(getCurrentUser())
  };
};

const mapStateToProps = state => {
  return { currentUser: state.accountInfo.currentUser.membershipInfo };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoupon);
