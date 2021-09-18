import React, { useEffect } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import "./styles.scss";
function HeartDiseasePrediction() {
  // const fetchResult = async (url, data) => {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // };
  // const result = async () => {
  //   const response = await fetchResult("http://localhost:5000/predictapi", {
  //     data: [50, 0, 1, 200, 180, 180, 150, 180, 0, 2.5, 2, 1, 2],
  //   });
  //   console.log(response);
  // };
  const fields = [
    {
      name: "Age",
      id: "age",
    },
    { name: "Sex", id: "sex" },
    { name: "Chest pain type", id: "chestPainType" },
    { name: "Resting blood pressure", id: "restingBloodSugar" },
    { name: "Cholesterol", id: "cholesterol" },
    { name: "Fasting blood sugar", id: "fastingBloodSugar" },
    { name: "Resting electrocardiographic results", id: "restingEcgResults" },
    { name: "Maximum heart rate", id: "maxHeartRate" },
    { name: "Exercise Induced Angina", id: "angina" },
  ];

  const fieldsCol3 = [
    { name: "Old peak", id: "oldPeak" },
    { name: "Slope", id: "slope" },
    { name: "Flourosopy", id: "flourosopy" },
    { name: "Thalassemia", id: "thalassemia" },
  ];

  useEffect(() => {
    // result();
  }, []);

  return (
    <>
      <div className="row heartscape-page-padding">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="heartscape-heading-color">Heartscapes</h3>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12">
          <h5 className="heartscape-heading-color">
            Please fill the required fields to get an accurate result. Click
            help icon for more information of the fields below.
          </h5>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <button className="btn heading-button-color">Help</button>
        </div>
        {fields.map((field) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-12" key={field.id}>
              <label className="heartscape-field-label">{field.name}</label>
              <InputGroup size="sm" className="mb-3">
                {/* <InputGroup.Text id="inputGroup-sizing-sm">
                  <FavoriteIcon />
                </InputGroup.Text> */}
                <FormControl
                  id={field.id}
                  name={field.id}
                  className="heartscape-input-field"
                  autocomplete="off"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </div>
          );
        })}
        {fieldsCol3.map((field) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-12" key={field.id}>
              <label className="heartscape-field-label">{field.name}</label>
              <InputGroup size="sm" className="mb-3">
                {/* <InputGroup.Text id="inputGroup-sizing-sm">
                  <FavoriteIcon />
                </InputGroup.Text> */}
                <FormControl
                  id={field.id}
                  name={field.id}
                  className="heartscape-input-field"
                  autocomplete="off"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </div>
          );
        })}

        <div className="col-lg-6 col-md-6 col-sm-12">
          <button className="btn heading-button-color heartscape-button">
            Predict
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <button className="btn heading-button-color heartscape-button">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default HeartDiseasePrediction;
