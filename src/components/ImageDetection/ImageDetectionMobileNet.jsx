import '@tensorflow/tfjs';
import './styles.scss';

import * as mobileNet from '@tensorflow-models/mobilenet';

import React, { useEffect, useRef, useState } from 'react';

import Loading from '../Loading/Loading';

function ImageDetectionMobileNet() {
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [results, setResults] = useState([]);

  const imageRef = useRef(null);
  const urlRef = useRef(null);
  const uploadImageRef = useRef(null);

  const loadModel = async () => {
    try {
      const loadedModel = await mobileNet.load();
      setModel(loadedModel);
    } catch (error) {
      console.error('Error loading model:', error);
    } finally {
      setIsModelLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setResults([]);
    }
  };

  const identify = async () => {
    if (model && imageRef.current) {
      const predictions = await model.classify(imageRef.current);
      setResults(predictions);
    }
  };

  const handleOnChange = (e) => {
    setImageUrl(e.target.value);
    setResults([]);
  };

  if (isModelLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center pb-2">
          <h1 className="heading-color">Image Classification</h1>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-4">
              <input
                className="d-none"
                type="file"
                accept="image/*"
                capture="camera"
                ref={uploadImageRef}
                onChange={uploadImage}
              />
            </div>
            <div className="col-lg-4">
              <button
                className="btn heading-button-color button-image-width-mb-5"
                onClick={() => uploadImageRef.current.click()}
              >
                Upload Image
              </button>
            </div>
            <div className="col-lg-4">
              {imageUrl && (
                <button
                  className="btn heading-button-color button-image-width-mb-5"
                  onClick={identify}
                  type="button"
                >
                  Predict
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6 text-start">
          <input
            type="text"
            placeholder="Paste image URL"
            ref={urlRef}
            onChange={handleOnChange}
            className="form-control url-input"
          />
        </div>

        <div className="col-lg-6 mt-2">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded"
              crossOrigin="anonymous"
              ref={imageRef}
              className="button-image-width-mb-5"
            />
          )}
        </div>

        <div className="col-lg-6 mt-2">
          {results.length > 0 && (
            <table className="table table-secondary table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Prediction</th>
                  <th scope="col">Probability</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.className}>
                    <td>{result.className}</td>
                    <td>{Math.round(result.probability * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageDetectionMobileNet;
