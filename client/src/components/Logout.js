import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { userActions } from "../actions";
import { bindActionCreators } from "redux";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.props.logout();
  }

  render() {
    return null
  }
}

function mapStateToProps({ user, loggedIn }) {
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
