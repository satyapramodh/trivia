import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActions } from '../actions';
import AlertDiv from "./AlertDiv";

class LoginForm extends React.Component {
  submitHandler = event => {
    event.preventDefault();

    const options = {
      username: this.refs.usernameInput.value,
      email: this.refs.emailInput.value,
      password: this.refs.passwordInput.value,
    };
    console.log("login form options", options);
    this.props.login(options.username, options.password);
  };

  render() {
    const msg = this.props.alert ? <AlertDiv message={this.props.alert.message} labelName="warning" /> : null;
    return (
      <Fragment>
        <div className="authForm">
          <h2>Login</h2>
          <form
            className="LoginForm"
            ref="LoginInputForm"
            onSubmit={this.submitHandler.bind(this)}
          >
            {msg}
            <input
              required
              className="form-control"
              type="text"
              name="username"
              ref="usernameInput"
              placeholder="Username*"
              defaultValue="pramodh"
            />
            <input
              required
              className="form-control"
              type="text"
              name="email"
              ref="emailInput"
              placeholder="Email*"
              defaultValue="pramodh@abc.com"
            />
            <input
              required
              className="form-control"
              type="password"
              name="password"
              ref="passwordInput"
              placeholder="Password*"
              defaultValue="pramodh1234"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p className="text-center">
            <Link to="/register">Register</Link>
          </p>
        </div>
      </Fragment>
    );
  }
}

// LoginForm.propTypes = {
//   children: PropTypes.object.isRequired
// };

function mapStateToProps({authentication}) {
  const { user, loggedIn, alert } = authentication;
  return {
    alert,
    user,
    loggedIn
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

const connectedLoginForm = connect(mapStateToProps, mapDispachToProps)(
  LoginForm
);

export { connectedLoginForm as LoginForm };
