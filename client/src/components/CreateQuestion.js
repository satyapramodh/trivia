import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { userActions } from "../actions";
import { bindActionCreators } from "redux";

class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return null;
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

const connectedCreateQuestion = withRouter(
  connect(mapStateToProps, mapDispachToProps)(CreateQuestion)
);
export { connectedCreateQuestion as CreateQuestion };
