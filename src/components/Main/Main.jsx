import React from "react";
import { useHistory } from "react-router-dom";
import ClassiicationImage from "../../assets/images/cf.svg";
import PredictionImage from "../../assets/images/pf.svg";
import HobbyImage from "../../assets/images/hb.svg";
import LandingImage from "../../assets/images/PostPredLanding.svg";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
function Main() {
  const history = useHistory();
  return (
    <>
      <div className="row main-page mx-0">
        <div className="col-md-6 col-sm-12">
          <div className="main-page-mobile-center main-page-web">
            <div className="main-page-sub-div">
              <h1 className="main-page-heading my-3">
                Hello, Welcome to Postpred.
              </h1>

              <p className="main-page-sub-heading my-0">
                This app lets you create a post about your hobbies.
              </p>
              <p className="main-page-sub-heading">
                It also has some utilities such as Image classification and
                heart disease prediction.
              </p>
              <div className="my-3 main-page-button-div">
                <a href="#explore" className="btn main-page-button">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 text-center display-none-mobile">
          <img src={LandingImage} loading="lazy" alt="" height={500} />
        </div>
      </div>

      <div id="explore" className="main-page-card-div mt-4">
        <div
          className="card m-3 p-3 shadow text-center"
          onClick={() => {
            history.push("/hobbies");
          }}
        >
          <img
            className="main-page-image"
            loading="lazy"
            src={HobbyImage}
            alt="img1"
          />
          <h3>Hobbies</h3>
          <p>
            Create a post about your hobby, edit, like and share it to the
            world.
          </p>
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
            loading="lazy"
          />
          <h3>Prediction</h3>
          <p>Check if you have heart diseases by filling up few fields.</p>
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
            loading="lazy"
          />
          <h3>Classification</h3>
          <p>
            Image classification using keras MobileNet model with great
            accuracy.
          </p>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Main;
