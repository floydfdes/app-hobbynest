import "./styles.scss";

import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import {
  heartscapeInitialData
} from "../../Data/Data";

import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import HelpAccordian from "../Help/HelpAccordian";
import Loading from "../Loading/Loading";
import Popup from "../Popup/Popup";

function HeartDiseasePrediction() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isHelpModelOpen, setIsHelpModelOpen] = useState(false);
  const [prediction, setPrediction] = useState({});
  const [formData, setFormData] = useState(heartscapeInitialData);
  const [loading, setLoading] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;
    document.getElementById(name).classList.remove("heartscape-error-class");
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    for (const key in formData) {
      if (!formData[key]) {
        document.getElementById(key).classList.add("heartscape-error-class");
        isValid = false;
      }
    }
    return isValid;
  };

  const submitForm = () => {
    if (!validate()) return;

    setLoading(true);
    const data = Object.values(formData).map((value) => parseInt(value, 10));

    axios
      .post("https:///utilitiesapi.herokuapp.com/heartdisease", data)
      .then((res) => {
        setPrediction(res.data);
        setLoading(false);
        setIsModelOpen(true);
      })
      .catch(() => setLoading(false));
  };

  const renderField = (field) => {
    return !field.options ? (
      <InputGroup size="md" className="mb-3">
        <FormControl
          onChange={updateForm}
          id={field.id}
          name={field.id}
          className="heartscape-input-field"
          autoComplete="off"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder={field.placeholder}
          type="Number"
        />
      </InputGroup>
    ) : (
      <select
        onChange={updateForm}
        id={field.id}
        name={field.id}
        className="form-select form-select heartscape-input-field mb-3"
      >
        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <Popup
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        prediction={prediction}
      />
      <HelpAccordian
        isHelpModelOpen={isHelpModelOpen}
        setIsHelpModelOpen={setIsHelpModelOpen}
      />
      {loading && <Loading />}
      <div className="container card shadow">
        <div className="row heartscape-page-padding">
          <div className="col-lg-10 col-md-9 col-10">
            <h2 className="heartscape-heading-color">Heartscapes</h2>
          </div>
          <div className="col-lg-2 col-md-3 col-2">
            <button
              onClick={() => setIsHelpModelOpen(true)}
              className="btn heading-button-color"
            >
              <InfoIcon fontSize="small" />
              <span className="d-none d-md-block mx-1">Help</span>
            </button>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="heartscape-sub-heading-color">
              Please ensure that all the required fields are filled in order to
              get the most accurate results. If you need more information or
              help, please refer to our help section.
            </p>
          </div>

          {fields.map((field) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xm-6" key={field.id}>
              <label className="heartscape-field-label">{field.name}</label>
              {renderField(field)}
            </div>
          ))}

          {fieldsCol3.map((field) => (
            <div className="col-lg-3 col-md-3 col-sm-12" key={field.id}>
              <label className="heartscape-field-label">{field.name}</label>
              {renderField(field)}
            </div>
          ))}

          <div className="col-lg-4 col-md-4"></div>
          <div className="col-lg-4 col-md-4"></div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <button
              onClick={submitForm}
              className="btn heading-button-color heartscape-button"
            >
              Predict
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeartDiseasePrediction;
