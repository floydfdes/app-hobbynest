import React from "react";
import { useHistory } from "react-router-dom";
import ClassiicationImage from "../../assets/images/classificationIcon.png";
import PredictionImage from "../../assets/images/predictionIcon.png";
import HobbyImage from "../../assets/images/hobbyIcon.png";
import LandingImage from "../../assets/images/PostPredLanding.svg";
function Main() {
  const history = useHistory();
  return (
    <>
      <div className="row main-page mx-0">
        <div className="col-md-6 col-sm-12">
          <div className="main-page-mobile-center main-page-web">
            <h1 className="main-page-heading my-3">
              Hello, Welcome to Postpred.
            </h1>

            <p className="main-page-sub-heading my-0">
              This app lets you create your favorite Hobby post and share it to
              the entire world.
            </p>
            <p className="main-page-sub-heading">
              It also has some utilities such as Image classification and heart
              disease prediction.
            </p>
            <div className="my-3 main-page-button-div">
              <a href="#explore" className="btn main-page-button">
                Explore
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 text-center display-none-mobile">
          <img src={LandingImage} alt="" height={500} />
        </div>
      </div>

      <div id="explore" className="main-page-card-div mt-4">
        <div
          className="card m-3 p-3 shadow text-center"
          onClick={() => {
            history.push("/hobbies");
          }}
        >
          <img className="main-page-image" src={HobbyImage} alt="img1" />
          <h3>Hobbies</h3>
          <p>Post a hobby. Edit, like and share to the world </p>
        </div>
        <div
          className="card m-3 p-3 shadow text-center"
          onClick={() => {
            history.push("/hearts");
          }}
        >
          <img
            className="main-page-image"
            src={PredictionImage}
            alt="PredictionImage"
          />
          <h3>Prediction</h3>
          <p>
            Check the condition of our heart. Find out if you have a heart
            disease by filling few fields.
          </p>
        </div>
        <div
          className="card m-3 p-3 shadow text-center"
          onClick={() => {
            history.push("/mobilenet");
          }}
        >
          <img
            className="main-page-image"
            src={ClassiicationImage}
            alt="ClassiicationImage"
          />
          <h3>Classification</h3>
          <p>
            Capture and classify an image. The outcome is based on tensorflow
            mobilenet model
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
