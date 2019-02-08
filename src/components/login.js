import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../thunks/accountThunks";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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
        </div>
        <br />
        <div className="child-div-login">
          <p>Don't have an account yet?</p>
          <p>Create an account</p>
        </div>
      </div>
    );
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.authenticateUser(this.state);
    this.setState({
      email: "",
      password: ""
    });
    this.props.history.push("/coupons");
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: loginInfo => dispatch(authenticateUser(loginInfo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
