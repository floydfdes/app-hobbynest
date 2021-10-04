import React from "react";

function Main() {
  return (
    <div className="row main-page mx-0">
      {/* <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center">
        <div className="card main-page-card">
          <h2>Utilites app</h2>
          <h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, at ipsam? Magni eligendi aut suscipit et praesentium, ea
            numquam cum totam nihil quod quas ratione repellat ipsum fuga
            similique cumque.
          </h5>
          <button className="btn">Get started</button>
        </div>
      </div> */}
      <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center px-5 flex-column">
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
      <div className="col-lg-6 col-md-6 col-sm-12"></div>
    </div>
  );
}

export default Main;
