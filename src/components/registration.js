import React, { Component, Fragment } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.submitHandler}>
          <ul>
            <li className="registrationInputs">
              <label htmlFor="firstName">First name: </label>
              <input
                type="text"
                name="firstName"
                onChange={this.changeHandler}
                value={this.state.firstName}
              />
            </li>
            <li className="registrationInputs">
              <label htmlFor="lastName">Last name: </label>
              <input
                type="text"
                name="lastName"
                onChange={this.changeHandler}
                value={this.state.lastName}
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
                value={this.state.firstName}
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
    console.log("submit");
  }
}

export default Registration;
