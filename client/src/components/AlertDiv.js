import React from "react";
import PropTypes from "prop-types";

const AlertDiv = props => (
  <div className={"alert alert-" + props.labelName} role="alert">
    {props.message}
  </div>
);

AlertDiv.propTypes = {
  message: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired
};

export default AlertDiv;
