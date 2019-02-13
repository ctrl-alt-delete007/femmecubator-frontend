import React, { Component, Fragment } from "react";
import WishlistItem from "./WishlistItem";
import { fetchCurrentUser } from "../thunks/accountThunks";
import { connect } from "react-redux";

class Wishlists extends Component {
  constructor(props) {
    super(props);

    this.props.fetchCurrentUser();
  }

  render() {
    const currentUser = this.props.currentUser.membershipInfo || {
      coupons: []
    };

    const wishlists = currentUser.coupons.map((wishlistItem, i) => (
      <WishlistItem key={i} wishlistItem={wishlistItem} />
    ));

    return (
      <Fragment>
        <table className="ui striped table">
          <thead>
            <tr>
              <th>Sponsor</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{wishlists}</tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.accountInfo.currentUser };
};

const mapDispatchToProps = dispatch => {
  return { fetchCurrentUser: () => dispatch(fetchCurrentUser()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlists);
