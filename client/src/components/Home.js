import React from "react";
import { Link } from "react-router-dom";

// Home page component. This serves as the welcome page with link to the library
const Home = () => (
  <div className="jumbotron center">
    <h1 className="lead">
      Welcome to Trivia app
    </h1>
    <div>
      <Link to="trivia">
        <button className="btn btn-lg btn-primary">Answer Trivia</button>
      </Link>
    </div>
  </div>
);

export default Home;
