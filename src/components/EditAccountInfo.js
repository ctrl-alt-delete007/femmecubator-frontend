import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { updateUser } from "../thunks/accountThunks";

class EditAccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.membershipInfo.id,
      first_name: this.props.currentUser.membershipInfo.first_name,
      last_name: this.props.currentUser.membershipInfo.last_name,
      email: this.props.currentUser.membershipInfo.email,
      password: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  render() {
    console.log();
    return (
      <Fragment>
        <form onSubmit={this.submitHandler}>
          <ul>
            <li className="accountForms">
              <label htmlFor="first_name">First name: </label>
              <input
                type="text"
                name="first_name"
                onChange={this.changeHandler}
                value={this.state.first_name}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="last_name">Last name: </label>
              <input
                type="text"
                name="last_name"
                onChange={this.changeHandler}
                value={this.state.last_name}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                name="email"
                onChange={this.changeHandler}
                value={this.state.email}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                onChange={this.changeHandler}
                value={this.state.password}
              />
            </li>
            <input type="submit" value="Update" />
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

  async submitHandler(e) {
    e.preventDefault();
    await this.props.updateUser(this.state);
    this.props.history.push("/account");
  }
}

const mapDispatchToProps = dispatch => {
  return { updateUser: userInfo => dispatch(updateUser(userInfo)) };
};

export default connect(
  null,
  mapDispatchToProps
)(EditAccountInfo);
