import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import { userActions } from "../actions";
import { bindActionCreators } from "redux";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    // localStorage.clear();
    console.log("logout comp constructor");

    // this.props.login();
    this.props.logout();
    // this.props.history.push("/login");
  }

  render() {
    return null
  }
}

// Logout.propTypes = {
//   dispatch: PropTypes.func.isRequired
// };

function mapStateToProps({ user, loggedIn }) {
  // const {} = authentication;
  return {
    user,
    loggedIn
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

const connectedLogout = withRouter(
  connect(mapStateToProps, mapDispachToProps)(Logout)
);
export {connectedLogout as Logout};
