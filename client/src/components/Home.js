import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FontAwesome from 'react-fontawesome';
import { userActions } from "../actions";

class Home extends React.Component {
  render() {
    const {user} = this.props;

    return <div className="home col-md-6 col-md-offset-3">
        <h1>Hi {user ? user.username : ""}!</h1>
        <p>You're logged in!!</p>
        <Link to="/logout">Logout</Link>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">
              <FontAwesome name="plus" />
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">Create</h6>
            <p className="card-text">Create new Trivia questions</p>
            <a href="#" className="card-link">
              Create
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">
              <FontAwesome name="list-alt" />
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">Play</h6>
            <p className="card-text">Play Trivia</p>
            <a href="#" className="card-link">
              Play
            </a>
          </div>
        </div>
      </div>;
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
