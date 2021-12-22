import React from "react";

function About() {
  return (
    <div className="container about-page">
      <div className="row">
        <div className="col-lg-10 col-md-10">
          <h2>About us</h2>
          <h4>The application</h4>
          <div>
            Postpred is a web application.
            <ul>
              <li>It has two sections (posting and prediction).</li>
            </ul>
            <h5>Hobbies app</h5>
            <ul>
              <li>The user has to first register to use this feature.</li>
              <li>
                It allows a valid user to create, edit, delete a hobby post. All
                valid users also have the ability to like a post.
              </li>
            </ul>
            <h5>Heart disease classification</h5>
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
            <h5>Image classification</h5>
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
            <h4>The developer</h4>
            <span>
              I'm Floyd Fernandes, 24. I'm a software developer from Goa,India.
              I work with Angular, React and python based projects. Please click
              the links below to follow me and have fun using the hobbies
              application.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
