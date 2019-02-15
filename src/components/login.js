import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticateUser } from "../thunks/accountThunks";
import { NavLink } from "react-router-dom";
import { clearAuthenticationError } from "../actions/accountActions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:
        this.props.location.state === undefined
          ? ""
          : this.props.location.state.loginData.loginData,
      password: "",
      error:
        this.props.location.state === undefined
          ? ""
          : this.props.location.state.loginData.message
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillUnmount() {
    // this.props.clearAuthenticationError();
  }

  render() {
    return (
      <div className="parent-div-login">
        <div className="child-div-login">
          <form className="login-form" onSubmit={this.submitHandler}>
            <h3 className="">Log In</h3>
            <p>Please sign in to access our services.</p>
            <label htmlFor="email">E-mail:</label>
            <div className="ui input">
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </div>
            <label htmlFor="password">Password:</label>
            <div className="ui input">
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
            </div>
            <input
              type="submit"
              value="submit"
              className="positive huge ui button"
              id="login-btn"
            />
          </form>
          <div className="error-message">{this.state.error}</div>
        </div>
        <br />
        <div className="child-div-login">
          <p>Don't have an account yet?</p>
          <p>
            <NavLink to="/signup">Create an account</NavLink>
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

    const loginInfo = {
      email: this.state.email,
      password: this.state.password
    };

    if (this.state.email === "" || this.state.password === "") {
      this.setState({ error: "All fields are required!" });
    } else {
      await this.props.authenticateUser(loginInfo);
      // this.props.clearAuthenticationError();
      this.props.history.push({
        pathname: "/coupons",
        state: {
          email: this.state.email
        }
      });
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: loginInfo => dispatch(authenticateUser(loginInfo)),
    clearAuthenticationError: () => dispatch(clearAuthenticationError())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
