import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import { Route } from "react-router-dom";
import RegisterForm from './RegisterForm';
import AlertDiv from "../components/AlertDiv";

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class Auth extends React.Component {
  render() {
    const { notice, error } = this.props;
    let alertText;
    if(notice){
      debugger;
      alertText = <AlertDiv text={notice} labelName="success" />;
    }
    if(error){
      debugger;
      alertText = <AlertDiv text={error} labelName="danger" />;
    }
    return (
      <Fragment>
        <div className="container text-center">
          {alertText}
          <RegisterForm />
        </div>
      </Fragment>
    );
  }
}

// Auth.propTypes = {
//   children: PropTypes.object.isRequired
// };

 // Subscribe component to redux store and merge the state into component's props

export default Auth;
