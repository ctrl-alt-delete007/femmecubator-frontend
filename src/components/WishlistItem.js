import React, { Component } from "react";

class WishlistItem extends Component {
  render() {
    const { wishlistItem } = this.props;
    return (
      <tr>
        <td>{wishlistItem.sponsor}</td>
        <td>{wishlistItem.description}</td>
        <td>{new Date(wishlistItem.expiration).toLocaleDateString("en-US")}</td>
      </tr>
    );
  }
}

export default WishlistItem;
