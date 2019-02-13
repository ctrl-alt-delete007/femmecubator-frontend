import React, { Component, Fragment } from "react";
import WishlistItem from "./WishlistItem";
class Wishlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlists: []
    };
  }

  render() {
    const tmp = this.props.wishlists || [{}];
    const wishlists = tmp.map((wishlistItem, i) => (
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

export default Wishlists;
