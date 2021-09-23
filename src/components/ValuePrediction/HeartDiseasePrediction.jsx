import axios from "axios";
import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import {
  heartscapeFields,
  heartscapefieldsCol3,
  heartscapeInitialData,
} from "../../Data/Data";
import InfoIcon from "@mui/icons-material/Info";
import "./styles.scss";
import Popup from "../Popup/Popup";
import HelpAccordian from "../Help/HelpAccordian";

function HeartDiseasePrediction() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isHelpModelOpen, setIsHelpModelOpen] = useState(false);
  const [prediction, setPrediction] = useState({});
  const [formData, setFormData] = useState(heartscapeInitialData);
  const fields = heartscapeFields;
  const fieldsCol3 = heartscapefieldsCol3;

  const updateForm = (event) => {
    document.getElementById(event.target.name).classList.remove("error-class");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const validate = () => {
    let isValid = true;
    for (const formField in formData) {
      if (!formData[formField]) {
        console.log(
          document.getElementById(formField).classList.add("error-class")
        );
        isValid = false;
      }
    }
    return isValid;
  };
  const submitForm = () => {
    const isValid = validate();
    if (!isValid) return;
    const data = [];
    for (const formField in formData) {
      data.push(parseInt(formData[formField]));
    }

    axios
      .post("https:///utilitiesapi.herokuapp.com/heartdisease", data)
      .then((res) => {
        setPrediction(res.data);
        setIsModelOpen(true);
      });
  };
  // const resetForm = () => {
  //   for (const formField in formData) {
  //     formData[formField] = "";
  //   }
  //   console.log(formData);
  // };
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
      <div className="row heartscape-page-padding">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="heartscape-heading-color">Heartscapes</h3>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12">
          <h5 className="heartscape-heading-color">
            Please fill the required fields to get an accurate result. Click
            help for more information.
          </h5>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button
            onClick={() => {
              setIsHelpModelOpen(true);
            }}
            className="btn heading-button-color"
          >
            <InfoIcon fontSize="small" />
            <span>Help</span>
          </button>
        </div>
        {fields.map((field) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xm-6" key={field.id}>
              <label className="heartscape-field-label">{field.name}</label>
              {!field.options ? (
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    onChange={updateForm}
                    id={field.id}
                    name={field.id}
                    className="heartscape-input-field"
                    autoComplete="off"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              ) : (
                <select
                  onChange={updateForm}
                  id={field.id}
                  name={field.id}
                  className="form-select form-select-sm"
                >
                  {field.options?.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          );
        })}
        {fieldsCol3.map((field) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-12" key={field.id}>
              <label className="heartscape-field-label">{field.name}</label>
              {!field.options ? (
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    onChange={updateForm}
                    id={field.id}
                    name={field.id}
                    className="heartscape-input-field"
                    autoComplete="off"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              ) : (
                <select
                  onChange={updateForm}
                  id={field.id}
                  name={field.id}
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                >
                  {field.options?.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          );
        })}

        <div className="col-lg-6 col-md-6 col-sm-12">
          <button
            onClick={submitForm}
            className="btn heading-button-color heartscape-button"
          >
            Predict
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <button
            type="button"
            className="btn heading-button-color heartscape-button"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default HeartDiseasePrediction;
