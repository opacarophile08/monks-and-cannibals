import React, { useState } from "react";
import "./Alert.css"; // Import CSS file for styling

const Alert = (props) => {
  const handleDismiss = () => {
    props.setAlert(null);
  };
  return (
    props.alert && (
      <div className="alert alert-content">
        <div className="alert-icon alert-icon-left">
          <span className="alert-icon-inner"></span>
        </div>
        <p className="alert-message">{props.alert.message}</p>
        <button
          className="alert-dismiss"
          onClick={() => {
            handleDismiss();
            props.reset();
          }}
        >
          <span>&times;</span>
        </button>
      </div>
    )
  );
};

export default Alert;
