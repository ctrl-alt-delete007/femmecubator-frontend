import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createUser } from "../thunks/accountThunks";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
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
            <li className="registrationInputs">
              <label htmlFor="first_name">First name: </label>
              <input
                type="text"
                name="first_name"
                onChange={this.changeHandler}
                value={this.state.first_name}
              />
            </li>
            <li className="registrationInputs">
              <label htmlFor="last_name">Last name: </label>
              <input
                type="text"
                name="last_name"
                onChange={this.changeHandler}
                value={this.state.last_name}
              />
            </li>
            <li className="registrationInputs">
              <label htmlFor="email">E-mail: </label>
              <input
                type="email"
                name="email"
                onChange={this.changeHandler}
                value={this.state.email}
              />
            </li>
            <li className="registrationInputs">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                onChange={this.changeHandler}
                value={this.state.password}
              />
            </li>
            <input type="submit" value="submit" />
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
    this.props.createUser(this.state);
    this.setState({ first_name: "", last_name: "", email: "", password: "" });
    e.target.reset();
    // !! ROUTE to main page
  }
}

const mapDispatchToProps = dispatch => {
  return { createUser: userInfo => dispatch(createUser(userInfo)) };
};
export default connect(
  null,
  mapDispatchToProps
)(Registration);
