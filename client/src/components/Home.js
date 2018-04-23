import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FontAwesome from 'react-fontawesome';
import { Route } from "react-router-dom";
import Navbar from "./Navbar";

class Home extends React.Component {
  render() {
    const {user} = this.props;

    return <Fragment>
        <div className="home">
          <Navbar user={user} />

          <div>
            <div className="row">
              <div className="col-md-3 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <FontAwesome name="plus" spin />
                    </h5>
                    <p className="card-text">Create new Trivia questions</p>
                    <Link className="card-link" to="/create">
                      Create
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <FontAwesome name="list-alt" spin />
                    </h5>
                    <p className="card-text">Play Trivia</p>
                    <Link className="card-link" to="/play">
                      Play
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>;
  }
}

function mapStateToProps({user}) {
  return {
    user
  };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
