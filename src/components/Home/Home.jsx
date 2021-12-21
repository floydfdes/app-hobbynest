import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HeartDiseasePrediction from "../ValuePrediction/HeartDiseasePrediction";
import ImageDetectionMobileNet from "../ImageDetection/ImageDetectionMobileNet";
import Main from "../Main/Main";
import UploadImage from "../ImageDetection/UploadImage";
import About from "../About/About";
import "./Home.scss";
import Hobbies from "../Hobbies/Hobbies";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

import Auth from "../Auth/Auth";
import CreateHobby from "../Hobbies/Hobbie/CreateHobby";

function Home() {
  let notification = useSelector((state) => state.toastNotificationReducer);

  const notify = (notification) => {
    if (notification.message) toast[notification.color](notification.message);
  };
  useEffect(() => {
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);
  }, []);

  useEffect(() => {
    notify(notification);
  }, [notification]);
  const setScreenHeight = () => {
    let heightOfScreen = window.innerHeight;
    document.documentElement.style.setProperty(
      "--screen-height",
      heightOfScreen + "px"
    );
  };

  return (
    <>
      <div
        id="main-container"
        className="container container-bg page-height container-margin-mobile"
      >
        <Switch>
          <Route path="/home" component={Main} exact />
          <Route path="/about" component={About} exact />
          <Route path="/login" component={Auth} exact />
          <Route path="/mobilenet" component={ImageDetectionMobileNet} exact />
          <Route path="/imagedetection" component={UploadImage} exact />
          <Route path="/hearts" component={HeartDiseasePrediction} exact />
          <Route path="/hobbies" component={Hobbies} exact />
          <Route path="/hobbies/create" component={CreateHobby} exact />
          <Route path="/hobbies/update" component={CreateHobby} exact />
          <Route path="/*" component={Main} exact />
          <Route path="/" component={Main} exact />
        </Switch>
        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </>
  );
}

export default Home;
