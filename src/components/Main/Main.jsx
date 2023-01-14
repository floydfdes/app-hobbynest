import React from "react";
import { useHistory } from "react-router-dom";
import ClassiicationImage from "../../assets/images/cf.svg";
import PredictionImage from "../../assets/images/pf.svg";
import HobbyImage from "../../assets/images/hb.svg";
import LandingImage from "../../assets/images/toucan.png";
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
                Welcome to hobbynest, where you can explore a wide range of
                hobbies and interests.
              </h1>

              <p className="main-page-sub-heading my-0">
                From crafting and cooking to photography and gardening, we have
                something for everyone. Plus, our heart disease prediction
                section can help you understand your risk of heaving a heart
                disease.
              </p>
              {/* <p className="main-page-sub-heading">
                It also has some utilities such as Image classification and
                heart disease prediction.
              </p> */}
              <div className="my-3 main-page-button-div">
                <a href="#explore" className="btn main-page-button">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 text-center display-none-mobile">
          <img
            src={LandingImage}
            loading="lazy"
            alt=""
            width={500}
            height={500}
          />
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
          <h5>Easy to use</h5>
          <p className="main-page-card-para">
            Our website allows you to share your own hobby experiences with
            other users through the easy-to-use posting functionality.
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
          <h5>Free signup</h5>
          <p className="main-page-card-para">
            Our website provides a secure login functionality that allows you to
            access your personalized hobby feeds and the heart disease
            prediction section.
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
            loading="lazy"
          />
          <h5>Prediction</h5>
          <p className="main-page-card-para">
            Our website's prediction functionality uses advanced algorithms to
            analyze your personal health data and provide you with an accurate
            assessment of your heart disease risk.
          </p>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Main;
