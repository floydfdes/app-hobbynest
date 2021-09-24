import React from "react";
import loading from "../../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="Loading-spinner">
      <img className="Loading-spinner-image" src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
