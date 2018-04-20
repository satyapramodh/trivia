import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleLogout() {
    return e => this.props.dispatch(userActions.logout());
  }

  render() {
    const { user} = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.name}!</h1>
        <p>You're logged in with React!!</p>
        <h3>All registered users:</h3>

          <ul>
              <li key={user.id}>
                {user.name}
                <span>
                  {" "}
                  - <a onClick={this.handleLogout()}>Delete</a>
                </span>
              </li>

          </ul>

        <p>
          <Link to="/logout">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
