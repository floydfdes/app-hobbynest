import React from "react";
import "./about.scss";
function About() {
  return (
    <div className="container about-page">
      <div className="row">
        <h2>About us</h2>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item-about">
            <h3 className="accordion-header" id="headingOne">
              <button
                className="accordion-button-about"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                The application
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body-about">
                It has two sections (posting and prediction).
              </div>
            </div>
          </div>
          <div className="accordion-item-about">
            <h3 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button-about collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hobbies app
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body-about">
                <ul>
                  <li>The user has to first register to use this feature.</li>
                  <li>
                    It allows a valid user to create, edit, delete a hobby post.
                    All valid users also have the ability to like a post.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item-about">
            <h3 className="accordion-header" id="headingThree">
              <button
                className="accordion-button-about collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Heart disease classification
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body-about">
                <ul>
                  <li>
                    It predicts if a user has heartdisease based on the provided
                    inputs.
                  </li>
                  <li>
                    The classification model in the backend is developed using
                    python and the dataset used for building it is from Kaggle.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item-about">
            <h3 className="accordion-header" id="headingFour">
              <button
                className="accordion-button-about collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                Image classification
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body-about">
                <ul>
                  <li>
                    It is an image classification based on tensorflow mobileNet
                    model.
                  </li>
                  <li>
                    It allows to predict image by uploading from the storange or
                    directly by providing the link to the image.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item-about">
            <h3 className="accordion-header" id="headingFive">
              <button
                className="accordion-button-about collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
              >
                The developer
              </button>
            </h3>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body-about">
                <span>
                  I'm Floyd Fernandes, 24. I'm a software developer from
                  Goa,India. I work with Angular, React and python based
                  projects. Please click the links below to follow me and have
                  fun using the Postpred application.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
