import React, { useEffect } from "react";

function HeartDiseasePrediction() {
  const fetchResult = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  // const result = async () => {
  //   const response = await fetchResult("http://localhost:5000/predictapi", {
  //     data: [50, 0, 1, 200, 180, 180, 150, 180, 0, 2.5, 2, 1, 2],
  //   });
  //   console.log(response);
  // };

  useEffect(() => {
    // result();
  }, []);
  return <>Hearts</>;
}

export default HeartDiseasePrediction;
