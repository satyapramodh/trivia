import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import { userActions } from "../actions";

class Logout extends React.Component {
  componentWillMount() {
    // this.props.dispatch(userActions.logout());
  }
  onClickHandler (){
    this.props.dispatch(userActions.logout());
  }

  render() {
    // return <Redirect to="/" />;
    return <button onClick={this.onClickHandler.bind(this)} >logout</button>;
  }
}
Logout.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const connectedLogout = withRouter(connect()(Logout));
export {connectedLogout as Logout};
