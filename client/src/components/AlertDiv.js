import React from "react";

const AlertDiv = props => {
  if(props.alert.message != null){
    return (<div className={"alert " + props.alert.type} role="alert">
        {props.alert.message}
      </div>);
  } else {
    return null;
  }
}

export default AlertDiv;
