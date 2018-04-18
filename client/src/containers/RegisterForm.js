import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { registerUser } from "../actions/triviaActions";
// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class RegisterForm extends React.Component {

  submitHandler = event => {
    event.preventDefault();

    const options = {
      username: this.refs.usernameInput.value,
      name: this.refs.nameInput.value,
      email: this.refs.emailInput.value,
      password: this.refs.passwordInput.value,
      password_confirmation: this.refs.password_confirmationInput.value
    };
    console.log("reg options", options);
    this.props.dispatch(registerUser(options));
  };

  render() {
    return <Fragment>
        <div className="authForm">
          <h2>Register</h2>
          <form className="registerForm" ref="registerFormInput" onSubmit={this.submitHandler.bind(this)}>
            <input className="form-control" type="text" name="name" ref="nameInput" placeholder="Name" defaultValue="pramodh" />
            <input required className="form-control" type="text" name="username" ref="usernameInput" placeholder="Username*" defaultValue="pramodh" />
            <input required className="form-control" type="text" name="email" ref="emailInput" placeholder="Email*" defaultValue="pramodh@abc.com" />
            <input required className="form-control" type="password" name="password" ref="passwordInput" placeholder="Password*" defaultValue="pramodh1234" />
            <input required className="form-control" type="password" name="password_confirmation" ref="password_confirmationInput" placeholder="Password confirmation*" defaultValue="pramodh2345" />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p className="text-center">
            <a href="#">Login</a>
          </p>
        </div>
      </Fragment>;
  }
}

// RegisterForm.propTypes = {
//   children: PropTypes.object.isRequired
// };


const mapStateToProps = ({ notice, error }) => ({
  notice,
  error
});


export default connect(mapStateToProps)(RegisterForm);
