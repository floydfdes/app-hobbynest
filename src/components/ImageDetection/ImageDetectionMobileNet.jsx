import React from "react";
import { useEffect, useRef, useState } from "react";
import "@tensorflow/tfjs";
import * as mobileNet from "@tensorflow-models/mobilenet";
import "./styles.scss";
import Loading from "../Loading/Loading";
function ImageDetectionMobileNet() {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageurl, setImageurl] = useState(null);
  const [results, setResults] = useState([]);

  const ref = useRef();
  const urlRef = useRef();
  const uploadImageRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobileNet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageurl(url);
    } else {
      setImageurl(null);
    }
  };

  const identify = async () => {
    const results = await model.classify(ref.current);
    setResults(results);
  };

  const handleOnChange = (e) => {
    setImageurl(e.target.value);
    setResults([]);
  };

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="text-center pb-2 heading-color">
            Image classification
          </h1>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input
                className="hide-input-file"
                type="file"
                name=""
                id=""
                accept="img/*"
                capture="camera"
                ref={uploadImageRef}
                onChange={uploadImage}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <button
                className="btn heading-button-color button-image-width-mb-5"
                onClick={() => {
                  uploadImageRef.current.click();
                }}
              >
                Upload Image
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              {imageurl && (
                <button
                  className="btn  heading-button-color button-image-width-mb-5"
                  onClick={identify}
                  type="button"
                >
                  Predict
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 text-start ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Paste image URL"
            ref={urlRef}
            onChange={handleOnChange}
            className="form-control url-input"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
          {imageurl && (
            <img
              src={imageurl}
              alt="imageUrl"
              crossOrigin="anonymous"
              ref={ref}
              className="button-image-width-mb-5"
            />
          )}
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
          {results.length > 0 && (
            <table className="table table-secondary table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Prediction</th>
                  <th scope="col">Probability</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => {
                  return (
                    <tr key={result.className}>
                      <td>{result.className}</td>
                      <td>{Math.round(result.probability * 100)} %</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageDetectionMobileNet;
