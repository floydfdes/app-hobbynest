import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";

import "./Home.scss";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

import Loading from "../Loading/Loading";
const UploadImage = React.lazy(() => import("../ImageDetection/UploadImage"));
const Hobbies = React.lazy(() => import("../Hobbies/Hobbies"));
const Main = React.lazy(() => import("../Main/Main"));
const Auth = React.lazy(() => import("../Auth/Auth"));
const CreateHobby = React.lazy(() => import("../Hobbies/Hobbie/CreateHobby"));
const About2 = React.lazy(() => import("../About/About2"));
const HeartDiseasePrediction = React.lazy(() =>
  import("../ValuePrediction/HeartDiseasePrediction")
);
const ImageDetectionMobileNet = React.lazy(() =>
  import("../ImageDetection/ImageDetectionMobileNet")
);

function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
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
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/home" component={Main} exact />
            <Route path="/about" component={About2} exact />
            <Route path="/login" component={Auth} exact />
            <Route
              path="/mobilenet"
              component={ImageDetectionMobileNet}
              exact
            />
            <Route path="/imagedetection" component={UploadImage} exact />
            <Route path="/hearts" component={HeartDiseasePrediction} exact />
            <Route path="/hobbies" component={Hobbies} exact />
            <Route path="/hobbies/create" component={CreateHobby} exact />
            <Route path="/hobbies/update" component={CreateHobby} exact />
            <Route path="/*" component={Main} exact />
            <Route path="/" component={Main} exact />
          </Switch>
        </Suspense>
        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </>
  );
}

export default Home;
