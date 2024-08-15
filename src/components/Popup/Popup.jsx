import "./styles.scss";

import PropTypes from "prop-types";
import React from "react";
import ReactModal from "react-modal";
import DoctorSvg from "../../assets/images/doctor.svg";
import ManSVg from "../../assets/images/man.svg";

ReactModal.setAppElement("#root");

const Popup = (props) => {
  return (
    <ReactModal
      isOpen={props.isModelOpen}
      onRequestClose={() => {
        props.setIsModelOpen(false);
      }}
    >
      <p>
        {props.prediction.prediction ? (
          <img className="prediction-svg" src={DoctorSvg} alt="doctor" />
        ) : (
          <img className="prediction-svg" src={ManSVg} alt="man" />
        )}
      </p>
      <h1 className="prediction-popup-heading">
        {props.prediction.prediction ? "Sorry!" : "Awesome"}
      </h1>
      <p>{props.prediction.predictionMessage}</p>
      <br />
      <button
        className="btn prediction-popup-button"
        onClick={() => {
          props.setIsModelOpen(false);
        }}
      >
        Close
      </button>
    </ReactModal>
  );
};

// Add PropTypes validation
Popup.propTypes = {
  isModelOpen: PropTypes.bool.isRequired,
  setIsModelOpen: PropTypes.func.isRequired,
  prediction: PropTypes.shape({
    prediction: PropTypes.bool.isRequired,
    predictionMessage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Popup;
