import React from "react";
import PropTypes from "prop-types";

const AlertDiv = props => (
  <div className="alert alert-${labelName}" role="alert">
    {props.text}
  </div>
);

AlertDiv.propTypes = {
  text: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired
};

export default AlertDiv;
