import React from "react";
import { useHistory } from "react-router-dom";

function Main() {
  const history = useHistory();
  return (
    <>
      <div className="row main-page mx-0">
        <div className="main-page-mobile-center main-page-web">
          <h1 className="main-page-heading my-3">
            Hello, Welcome to Postpred.
          </h1>

          <p className="main-page-sub-heading my-0">
            This app lets yo create your favorite Hobby post and share it to the
            entire world.
          </p>
          <p className="main-page-sub-heading">
            It also has some utilities such as Image classification and heart
            disease prediction.
          </p>
          <div className="my-3 main-page-button-div">
            <a href="#explore" className="btn main-page-button">
              Explore
            </a>
            {/* <button className="btn main-page-button">Sign Up</button> */}
          </div>
        </div>

        {/* <div className="col-lg-2 col-md-2 d-none d-md-block"></div> */}
      </div>

      <div id="explore" className="main-page-card-div mt-4">
        <div className="card m-3 p-3 shadow text-center">
          <h5>Hobbies</h5>
          <p>Post a hobby. Edit, like and share to the world </p>
          <button
            onClick={() => {
              history.push("/hobbies");
            }}
            className="btn heading-button-color"
          >
            Try
          </button>
        </div>
        <div className="card m-3 p-3 shadow text-center">
          <h5>Prediction</h5>
          <p>
            Check the condition of our heart. Find out whether you have heart
            disease
          </p>
          <button
            onClick={() => {
              history.push("/hearts");
            }}
            className="btn heading-button-color"
          >
            Predict
          </button>
        </div>
        <div className="card m-3 p-3 shadow text-center">
          <h5>Classification</h5>
          <p>
            Capture and classify and image. Results based on tensorflow
            mobilenet model
          </p>
          <button
            onClick={() => {
              history.push("/mobilenet");
            }}
            className="btn heading-button-color"
          >
            Classify
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
