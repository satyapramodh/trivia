import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { userActions } from "../actions";
import { bindActionCreators } from "redux";
import Answer from "./Answer";

class Question extends React.Component {
  renderAnswers(answers) {
    let list = [];
    answers.forEach((element, idx) => {
      list.push(<Answer data={element} key={idx} />);
    });
    return list;
  }

  render() {
    const question = this.props.data;
    return <div className="card">
        <div className="card-title">
          <b>Question:</b> {question.title}
        </div>
        <div className="subtitle">{question.difficulty}</div>
        {this.renderAnswers(question.answers)}
      </div>;
  }
}

export default Question;
