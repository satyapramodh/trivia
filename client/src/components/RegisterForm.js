import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActions } from "../actions";
import AlertDiv from './AlertDiv';

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
    console.log("reg form options", options);
    this.props.register(options);
  };

  render() {
    const msg = this.props.alert ? <AlertDiv message={this.props.alert.message} labelName="warning" /> : null
    return <Fragment>
        <div className="authForm">
          <h2>Register</h2>
          <form className="registerForm" ref="registerFormInput" onSubmit={this.submitHandler.bind(this)}>
            {msg}
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
            <Link to="/login">Login</Link>
          </p>
        </div>
      </Fragment>;
  }
}

// RegisterForm.propTypes = {
//   children: PropTypes.object.isRequired
// };

function mapStateToProps({registration}) {
  const { alert } = registration;
  console.log("App prop alert", alert);
  return {
    alert
  };
}


function mapDispachToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}


const connectedRegisterForm = connect(mapStateToProps, mapDispachToProps)(
  RegisterForm
);

export {connectedRegisterForm as RegisterForm};