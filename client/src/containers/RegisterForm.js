import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import { Route } from "react-router-dom";

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class RegisterForm extends React.Component {
  render() {
    return <Fragment>
        <form className="registerForm" ref="registerForm" onSubmit="">
          <input required className="form-control" type="text" name="name" ref={this.nameRef} placeholder="Name" />
          <input required className="form-control" type="text" name="username" ref={this.usernameRef} placeholder="Username" />
          <input required className="form-control" type="text" name="email" ref={this.emailRef} placeholder="Email" />
          <input required className="form-control" type="text" name="password" ref={this.passwordRef} placeholder="Password" />
          <input required className="form-control" type="text" name="password_confirmation" ref={this.password_confirmationRef} placeholder="Password confirmation" />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Fragment>;
  }
}

// RegisterForm.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default RegisterForm;
