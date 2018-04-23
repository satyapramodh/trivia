import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActions } from '../actions';
import AlertDiv from "./AlertDiv";
import { push } from "react-router-redux";

class LoginForm extends React.Component {
  submitHandler = event => {
    event.preventDefault();

    const options = {
      username: this.refs.usernameInput.value,
      password: this.refs.passwordInput.value,
    };
    console.log("login form options", options);
    this.props
    .login(options.username, options.password);
  };

  render() {
    const { alert, loggedIn, history } = this.props;
    if(loggedIn){
      console.log("loggedin is true");
      // history.push("/");
    }
    // (alert) ? <AlertDiv message={this.props.alert.message} labelName="warning" /> :
    const msg = null;
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
              type="password"
              name="password"
              ref="passwordInput"
              placeholder="Password*"
              defaultValue="password"
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

function mapStateToProps(state) {
  console.log("loginform component updated", state, user);
  const { user, loggedIn, alert } = state;
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
