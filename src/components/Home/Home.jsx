import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HeartDiseasePrediction from "../ValuePrediction/HeartDiseasePrediction";
import ImageDetectionMobileNet from "../ImageDetection/ImageDetectionMobileNet";
import Main from "../Main/Main";
import UploadImage from "../ImageDetection/UploadImage";
import About from "../About/About";
import "./Home.scss";
import Hobbies from "../Hobbies/Hobbies";

import Auth from "../Auth/Auth";

function Home() {
  useEffect(() => {
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);
  }, []);
  const setScreenHeight = () => {
    let heightOfScreen = window.innerHeight;
    document.documentElement.style.setProperty(
      "--screen-height",
      heightOfScreen + "px"
    );
  };

  return (
    <div className="container container-bg page-height card">
      <Switch>
        <Route path="/home" component={Main} exact />
        <Route path="/about" component={About} exact />
        <Route path="/login" component={Auth} exact />
        <Route path="/mobilenet" component={ImageDetectionMobileNet} exact />
        <Route path="/imagedetection" component={UploadImage} exact />
        <Route path="/hearts" component={HeartDiseasePrediction} exact />
        <Route path="/hobbies" component={Hobbies} exact />
        <Route path="/*" component={Main} exact />
        <Route path="/" component={Main} exact />
      </Switch>
    </div>
  );
}

export default Home;
