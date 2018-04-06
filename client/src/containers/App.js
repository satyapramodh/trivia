import React, {Fragment} from "react";
// import PropTypes from 'prop-types';
import Header from "../common/Header";
// import { Route } from "react-router-dom";
// import Home from "../components/Home";
import Auth from './Auth';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as triviaActions from "../actions/triviaActions";

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends React.Component {
  render() {
    console.log("this.props", this.props);
    return (<Fragment>
        <div className="container-fluid text-center">
          <Header />
          <Auth />
          {/* {React.cloneElement({...this.props}.children, {...this.props})} */}
          {this.props.children}
          {/* <Route path="/" component={Home} /> */}
        </div>
      </Fragment>);
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };
const mapStateToProps = ({notice, error, currentUser, questions, scores}) => ({
  notice,
  error,
  currentUser,
  questions,
  scores
});

// function mapDispachToProps(dispatch) {
//   return bindActionCreators(triviaActions, dispatch);
// }

export default connect(mapStateToProps)(App);
