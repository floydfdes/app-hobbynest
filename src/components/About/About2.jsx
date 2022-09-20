import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./about.scss";
import MyImage from "../../assets/images/my image.jpg";
import React from "react";

const About2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center my-4 py-4 about-heading-bg">
          <h1>About</h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h3>About me</h3>
          <div>
            I am Floyd Fernandes, 24. I'm a software developer from Goa,India. I
            work with Angular, React and python based projects. Please click the
            links below to follow me and have fun using the Postpred
            application.
          </div>
          <h3 className="my-2">About website</h3>
          <div>
            This is project I built for learning purpose. It uses technologies
            such as ReactJS, ExpressJS, MongoDB, Bootstrap etc. Its main purpose
            is to allow users to create a post about events, hobbies and their
            moments. The users has to sign up to use this website but don't
            worry its completely free. It also provides some utilities such as a
            heart disease prediction which has 95% accuracy and also an image
            classiication which is built using tensorflow mobileNet model.Please
            click the links below to follow me and have fun using the postpred
            application.
          </div>

          <div>
            <p className="about-icons">
              Links to follow:
              <IconButton
                onClick={() =>
                  window.open(
                    "https://in.linkedin.com/in/floyd-fernandes-03b771121"
                  )
                }
              >
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open("https://www.instagram.com/floyd_fernandes_24/")
                }
              >
                <Instagram />
              </IconButton>
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img
              loading="lazy"
              className="about-image"
              src={MyImage}
              alt=""
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
