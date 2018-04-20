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

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      console.log("alertActions", alertActions);

      this.props.clear();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <Router history={history}>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {/* {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )} */}
            <div>
              <AuthRoute exact path="/" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ alertMessage }) {
  const { alert } = alertMessage;
  console.log("App prop alert", alert);
  return {
    alert
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(alertActions, dispatch);
}

const connectedApp = connect(mapStateToProps, mapDispachToProps)(App);
export { connectedApp as App };
