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
      password: "",
      error: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  render() {
    console.log();
    return (
      <Fragment>
        <div className="parent-div-login">
          <div className="child-div-login">
            <form className="login-form" onSubmit={this.submitHandler}>
              <h3 className="">Membership Level: Career-Switcher</h3>
              <p>Your account is free forever!</p>
              <label htmlFor="first_name">First name: </label>
              <div className="ui input form-input">
                <input
                  type="text"
                  name="first_name"
                  onChange={this.changeHandler}
                  value={this.state.first_name}
                />
              </div>
              <label htmlFor="last_name">Last name: </label>
              <div className="ui input form-input">
                <input
                  type="text"
                  name="last_name"
                  onChange={this.changeHandler}
                  value={this.state.last_name}
                />
              </div>
              <label htmlFor="email">E-mail: </label>
              <div className="ui input form-input">
                <input
                  type="email"
                  name="email"
                  onChange={this.changeHandler}
                  value={this.state.email}
                />
              </div>
              <label htmlFor="password">Password: </label>
              <div className="ui input form-input">
                <input
                  placeholder="type password..."
                  type="password"
                  name="password"
                  onChange={this.changeHandler}
                  value={this.state.password}
                />
              </div>
              <input
                type="submit"
                value="Update"
                className="positive huge ui button"
                id="update-registration-btn"
              />
            </form>
            <div className="error-message">{this.state.error}</div>
          </div>
        </div>
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

    const userInfo = {
      id: this.props.currentUser.membershipInfo.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    if (
      this.state.first_name === "" ||
      this.state.last_name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      this.setState({ error: "All fields are required!" });
    } else if (
      this.state.first_name.length < 2 ||
      this.state.last_name.length < 2 ||
      this.state.email.length < 2 ||
      this.state.password.length < 2
    ) {
      this.setState({ error: "All fields must be more than one character! " });
    } else {
      await this.props.updateUser(userInfo);
      this.props.history.push("/account");
    }
  }
}

const mapDispatchToProps = dispatch => {
  return { updateUser: userInfo => dispatch(updateUser(userInfo)) };
};

export default connect(
  null,
  mapDispatchToProps
)(EditAccountInfo);
