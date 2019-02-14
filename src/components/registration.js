import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../thunks/accountThunks";
import { clearRegistrationError } from "../actions/accountActions";
import { NavLink } from "react-router-dom";
class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name:
        this.props.location.state === undefined
          ? ""
          : this.props.location.state.registrationData.first_name,
      last_name:
        this.props.location.state === undefined
          ? ""
          : this.props.location.state.registrationData.last_name,
      email:
        this.props.location.state === undefined
          ? ""
          : this.props.location.state.registrationData.email,
      password: "",
      error:
        this.props.location.state === undefined
          ? ""
          : this.props.location.state.error
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  render() {
    return (
      <div className="parent-div-login">
        <div className="child-div-login">
          <form className="login-form" onSubmit={this.submitHandler}>
            <h3 className="">Create an Account</h3>
            <p>Your membership is FREE.</p>
            <label htmlFor="first_name">First name: </label>
            <div className="ui input form-input">
              <input
                placeholder="First name"
                type="text"
                name="first_name"
                onChange={this.changeHandler}
                value={this.state.first_name}
              />
            </div>

            <label htmlFor="last_name">Last name: </label>
            <div className="ui input form-input">
              <input
                placeholder="Last name"
                type="text"
                name="last_name"
                onChange={this.changeHandler}
                value={this.state.last_name}
              />
            </div>

            <label htmlFor="email">E-mail: </label>
            <div className="ui input form-input">
              <input
                placeholder="username@xyz.com"
                type="email"
                name="email"
                onChange={this.changeHandler}
                value={this.state.email}
              />
            </div>

            <label htmlFor="password">Password: </label>
            <div className="ui input form-input">
              <input
                placeholder="password"
                type="password"
                name="password"
                onChange={this.changeHandler}
                value={this.state.password}
              />
            </div>

            <input
              type="submit"
              value="submit"
              className="positive huge ui button"
              id="registration-btn"
            />
          </form>
          <div className="error-message">{this.state.error}</div>
        </div>
        <br />
        <div className="child-div-login">
          <p>Have an existing account?</p>
          <p>
            <NavLink to="/login">Back to Login</NavLink>
          </p>
        </div>
      </div>
    );
  }

  changeHandler(e) {
    if (e.target.name === "email") {
      this.setState({
        [e.target.name]: e.target.value.toLowerCase()
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  async submitHandler(e) {
    e.preventDefault();

    // Check if first_name, last_name, email, password is:
    // -empty ✓
    // -contains only one character ✓
    // -email is  a valid email
    // -check if email is duplicate
    // -password is good

    const registrationInfo = {
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
      await this.props.createUser(registrationInfo);
      if (this.state.error !== "") {
        this.props.clearRegistrationError();
      }

      this.props.history.push("/coupons");
      // <Redirect to="/coupons" />;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: userInfo => dispatch(createUser(userInfo)),
    clearRegistrationError: () => dispatch(clearRegistrationError())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Registration);
