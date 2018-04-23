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
      password: this.refs.passwordInput.value,
    };

    this.props
    .login(options.username, options.password);
  };

  render() {
    const { alert } = this.props;
    return <Fragment>
        <div className="authForm">
          <h2>Login</h2>
          <form className="LoginForm" ref="LoginInputForm" onSubmit={this.submitHandler.bind(this)}>
            <AlertDiv alert={alert} />
            <input required className="form-control" type="text"
            name="username" ref="usernameInput" placeholder="Username*" defaultValue="pramodh" />
            <input required className="form-control" type="password"
            name="password" ref="passwordInput" placeholder="Password*" defaultValue="password" />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
          <p className="text-center">
            <Link className="btn btn-primary" to="/register">Register</Link>
          </p>
        </div>
      </Fragment>;
  }
}

function mapStateToProps(state) {
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
