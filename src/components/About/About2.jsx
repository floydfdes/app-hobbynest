import "./about.scss";

import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import { IconButton } from "@mui/material";
import React from "react";
import MyImage from "../../assets/images/my_image.png";

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
            I am Floyd Fernandes, 24. I&apos;m a software developer from Goa, India. I
            work with Angular, React, and Python-based projects. Please click the
            links below to follow me and have fun using the HobbyNest
            application.
          </div>
          <h3 className="my-2">About website</h3>
          <div>
            This project was developed for educational purposes, incorporating a blend of technologies, including ReactJS, ExpressJS, MongoDB, and Bootstrap. Its primary goal is to empower users to share their experiences by creating posts about events, hobbies, and cherished moments. User registration is required, but rest assured, it&apos;s entirely free.
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
          <div className="text-center about-image-div">
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
