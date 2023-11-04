import ClassiicationImage from "../../assets/images/cf.svg";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HobbyImage from "../../assets/images/hb.svg";
import LandingImage from "../../assets/images/toucan.png";
import PredictionImage from "../../assets/images/pf.svg";
import React from "react";
import { useHistory } from "react-router-dom";
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
                Embark on a journey of discovery at Hobby Nest, your platform for creating and sharing posts about your hobbies and interests. Whether it's crafting, culinary arts, photography, gardening, or beyond, we provide a space for every passion to thrive.
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
          <h5>Share Your Hobbies</h5>
          <p className="main-page-card-para">
            Express your passion for hobbies with ease. Our user-friendly platform lets you share your hobby experiences effortlessly, connecting you with like-minded enthusiasts.
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
            Step into the world of hobbies with a hassle-free registration. Once you're in, enjoy personalized hobby feeds and more. Dive into a world of diverse interests.
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
          <h5>Discover More</h5>
          <p className="main-page-card-para">
            Explore exciting features and content. Dive into the world of hobbies and connect with fellow enthusiasts. Discover new passions and share your experiences.
          </p>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Main;
