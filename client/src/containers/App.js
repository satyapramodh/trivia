import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { history } from "../helpers";
import { alertActions } from "../actions";
import AuthRoute from "../components/AuthRoute";
import {Home} from "../components/Home";
import {LoginForm} from "../components/LoginForm";
import {RegisterForm} from "../components/RegisterForm";
import {Logout} from "../components/Logout";


class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clear();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <Router history={history}>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <div>
              <AuthRoute exact path="/" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/logout" component={Logout} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ alert, user }) {
  return {
    alert,
    user
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(alertActions, dispatch);
}

const connectedApp = connect(mapStateToProps, mapDispachToProps)(App);
export { connectedApp as App };
