import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { questionActions } from "../actions";
import { bindActionCreators } from "redux";
import Navbar from "./Navbar";
import Question from "./Question";

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.props.get();
  }

  renderQuestions(questions){
    let list = [];
    questions.forEach(element => {
      list.push(<Question data={element} key={element.id} />)
    });
    return list;
  }

  render() {
    const { user, questions } = this.props;
    return <div className="home">
        <Navbar user={user} />
        <h2>Trivia Questions</h2>
      {questions ? this.renderQuestions(questions) : "Loading..."}
      </div>;
  }
}

function mapStateToProps({ user, loggedIn, questions }) {
  return {
    user,
    loggedIn,
    questions
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(questionActions, dispatch);
}

const connectedQuestionList = withRouter(
  connect(mapStateToProps, mapDispachToProps)(QuestionList)
);
export { connectedQuestionList as QuestionList };
