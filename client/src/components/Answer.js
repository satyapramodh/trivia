import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { userActions } from "../actions";
import { bindActionCreators } from "redux";

class Answer extends React.Component {
  render() {
    let answer = this.props.data;
    return (
      <p>- {answer.title}</p>
    );
  }
}

export default Answer;
