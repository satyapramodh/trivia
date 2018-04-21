import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

class Home extends React.Component {
  handleLogout(e) {
    return e => this.props.dispatch(userActions.logout());
  }

  render() {
    // const {user} = this.props;
    return (
      <div className="home col-md-6 col-md-offset-3">
        {/* <h1>Hi {user.username}!</h1>
        <p>You're logged in with React!!</p>

        {user.username}
        <span>
          - <a onClick={this.handleLogout()}>Delete</a>
        </span> */}

        <p>
          <Link to="/logout">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {
    user
  };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
