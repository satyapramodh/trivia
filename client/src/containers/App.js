import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import Header from "../common/Header";
import { Route } from "react-router-dom";
import Home from "../components/Home";

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid text-center">
        <Header />
        {this.props.children}
        <Route path="/" component={Home} />
      </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
