import React, { Component, Fragment } from "react";
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
      <Fragment>
        <form onSubmit={this.submitHandler}>
          <ul>
            <li className="accountForms">
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.changeHandler}
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
    this.props.authenticateUser(this.state);
    this.setState({
      email: "",
      password: ""
    });
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
