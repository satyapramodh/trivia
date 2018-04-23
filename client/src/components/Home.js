import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

class Home extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <div className="home col-md-6 col-md-offset-3">

        <h1>
        Hi {user ? user.username : ""}!
        </h1>
        <p>You're logged in!!</p>
          <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

function mapStateToProps({user}) {
  // const {user} = authentication;
  console.log("home user", user);

  return {
    user
  };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
