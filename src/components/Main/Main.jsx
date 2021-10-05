import React from "react";

function Main() {
  return (
    <div className="row main-page mx-0">
      <div>
        <h1 className="main-page-heading my-3">
          This book is sure to liquefy your brain.
        </h1>

        <p className="main-page-sub-heading my-0">
          The manager of the fruit stand always sat and only sold vegetables.
        </p>
        <p className="main-page-sub-heading">
          The sky is clear; the stars are twinkling.
        </p>
        <div className="my-3 main-page-button-div">
          <button className="btn main-page-button">Explore</button>
          <button className="btn main-page-button">Sign Up</button>
        </div>
      </div>
      {/* <div className="col-lg-2 col-md-2 d-none d-md-block"></div> */}
    </div>
  );
}

export default Main;
