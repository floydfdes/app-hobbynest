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
import Loading from "../Loading/Loading";

function HeartDiseasePrediction() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isHelpModelOpen, setIsHelpModelOpen] = useState(false);
  const [prediction, setPrediction] = useState({});
  const [formData, setFormData] = useState(heartscapeInitialData);
  const [loading, setLoading] = useState(false);
  const fields = heartscapeFields;
  const fieldsCol3 = heartscapefieldsCol3;

  const updateForm = (event) => {
    document
      .getElementById(event.target.name)
      .classList.remove("heartscape-error-class");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const validate = () => {
    let isValid = true;
    for (const formField in formData) {
      if (!formData[formField]) {
        console.log(
          document
            .getElementById(formField)
            .classList.add("heartscape-error-class")
        );
        isValid = false;
      }
    }
    return isValid;
  };
  const submitForm = () => {
    const isValid = validate();
    if (!isValid) return;
    setLoading(true);
    const data = [];
    for (const formField in formData) {
      data.push(parseInt(formData[formField]));
    }

    axios
      .post("https:///utilitiesapi.herokuapp.com/heartdisease", data)
      .then((res) => {
        setPrediction(res.data);
        setLoading(false);
        setIsModelOpen(true);
      });
  };
  // const resetForm = () => {
  //   setFormData(heartscapeInitialData);
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
      {loading && <Loading />}
      <div className="container card shadow">
        <div className="row heartscape-page-padding">
          <div className="col-lg-10 col-md-9 col-10">
            <h2 className="heartscape-heading-color">Heartscapes</h2>
          </div>
          <div className="col-lg-2 col-md-3 col-2">
            <button
              onClick={() => {
                setIsHelpModelOpen(true);
              }}
              className="btn heading-button-color"
            >
              <InfoIcon fontSize="small" />
              <span className="d-none d-md-block mx-1">Help</span>
            </button>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="heartscape-sub-heading-color">
              Please ensure that all the required fields are filled in order to
              get the most accurate results and if you need more information or
              help with any of the fields, please refer to our help section for
              further assistance.
            </p>
          </div>

          {fields.map((field) => {
            return (
              <div
                className="col-lg-4 col-md-4 col-sm-6 col-xm-6"
                key={field.id}
              >
                <label className="heartscape-field-label">{field.name}</label>
                {!field.options ? (
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
          {/* <div className="col-lg-3 col-md-3 col-sm-12" onClick={resetForm}>
            <button type="button" className="btn heartscape-reset-button">
              Reset
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HeartDiseasePrediction;
