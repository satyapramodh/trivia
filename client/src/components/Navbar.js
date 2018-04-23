import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Trivia by Pramodh
        </Link>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/" className="disabled">
              {props.user ? `Hi ${props.user.username}` : ""}
            </Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
