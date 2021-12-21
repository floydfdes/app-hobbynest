import React from "react";
import loading from "../../assets/images/loaderGif.gif";

const Loading = () => {
  return (
    <div className="Loading-spinner">
      <img className="Loading-spinner-image" src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
