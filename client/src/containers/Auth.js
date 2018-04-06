import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import { Route } from "react-router-dom";
import RegisterForm from './RegisterForm';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class Auth extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid text-center">
          <RegisterForm />
        </div>
      </Fragment>
    );
  }
}

// Auth.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default Auth;
