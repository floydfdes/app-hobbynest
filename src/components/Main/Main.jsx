import PaletteIcon from '@mui/icons-material/Palette';
import PeopleIcon from '@mui/icons-material/People';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImage from '../../assets/images/hobby-nest-bird.svg';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Main() {
  const history = useNavigate();
  return (
    <>
      <div className="row main-page mx-0">
        <div className="col-md-6 col-sm-12">
          <div className="main-page-mobile-center main-page-web">
            <div className="main-page-sub-div">
              <h1 className="main-page-heading my-3">
                Welcome to HobbyNest, where you can explore a wide range of
                hobbies and interests.
              </h1>

              <p className="main-page-sub-heading my-0">
                Embark on a journey of discovery at Hobby Nest, your platform
                for creating and sharing posts about your hobbies and interests.
                Whether it&apos;s crafting, culinary arts, photography,
                gardening, or beyond, we provide a space for every passion to
                thrive.
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
            width={650}
            height={450}
          />
        </div>
      </div>

      <div id="explore" className="main-page-card-div container-fluid mt-4">
        <div className="row">
          <div
            className="col-md-4 col-lg-4 col-sm-12"
            onClick={() => {
              history('/hobbies');
            }}
          >
            <div className="card shadow text-center">
              {/* <img
                className="main-page-image"
                loading="lazy"
                src={HobbyImage}
                alt="img1"
              /> */}
              <PaletteIcon
                style={{ fontSize: '4rem', fill: 'var(--secondary-color)' }}
              />
              <h5>Share Your Hobbies</h5>
              <p className="main-page-card-para">
                Express your passion for hobbies with ease. Our user-friendly
                platform lets you share your hobby experiences effortlessly,
                connecting you with like-minded enthusiasts.
              </p>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-4 col-sm-12"
            onClick={() => {
              history('/login');
            }}
          >
            <div className="card shadow text-center">
              {/* <img
                className="main-page-image"
                src={PredictionImage}
                alt="PredictionImage"
                loading="lazy"
              /> */}
              <PeopleIcon
                style={{ fontSize: '4rem', fill: 'var(--secondary-color)' }}
              />
              <h5>Free Signup</h5>
              <p className="main-page-card-para">
                Step into the world of hobbies with a hassle-free registration.
                Once you&apos;re in, enjoy personalized hobby feeds and more.
                Dive into a world of diverse interests.
              </p>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-4 col-sm-12"
            onClick={() => {
              history('/hobbies');
            }}
          >
            <div className="card shadow text-center">
              {/* <img
                className="main-page-image"
                src={ClassiicationImage}
                alt="ClassiicationImage"
                loading="lazy"
              /> */}
              <TravelExploreIcon
                style={{ fontSize: '4rem', fill: 'var(--secondary-color)' }}
              />
              <h5>Discover More</h5>
              <p className="main-page-card-para">
                Explore exciting features and content. Dive into the world of
                hobbies and connect with fellow enthusiasts. Discover new
                passions and share your experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
