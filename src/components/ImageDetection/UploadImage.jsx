import React, { useState } from "react";
import axios from "axios";

function UploadImage() {
  const [selectedFile, setselectedFile] = useState(null);
  const uploadImage = (event) => {
    setselectedFile(event.target.files[0]);
  };
  const fileUpload = () => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    axios
      .post("http://localhost:5000/binaryimagedetection", fd)
      .then((res) => console.log(res));
  };
  return (
    <div>
      <input type="file" onChange={uploadImage} />
      <button onClick={fileUpload}>Upload</button>
    </div>
  );
}

export default UploadImage;
