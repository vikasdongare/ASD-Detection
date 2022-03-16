import React, { useState } from "react";
import React, { useState } from 'react';
import WebcamCapture from "../WebcamCapture";
import HomeHeader from "./HomeHeader";
import './index.css';
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const HomeInput = () => {


  const [image, setImage] = useState('');
  const [showImg, setShowImg] = useState(false);
  const [postImage, setPostImage] = useState({
    myFile: "",
  });

  const generateResult = React.useCallback(
    () => {
      setShowImg(true);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // createPost(postImage);
    console.log(postImage);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      // fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = image;
    const base64 = await convertToBase64(file);
    console.log("Base64: ", base64);
    setPostImage({ ...postImage, myFile: base64 });
  };


  return (
    <div className=" InputContent p-2 ">
      <div className=" content border border-dark rounded-3 d-flex flex-column align-items-center ">
        <HomeHeader heading="Input Image" />
        <div className=" text-center mt-5 form-group ">
          <label> Select a file : &nbsp;</label>
          <input
            type="file"
            className="form-control-file border border-dark"
          ></input>
          <br />
          <h4 className="my-5">Or</h4>
          <label>
            {/* Capture Photo :  
            <i className="fas fa-camera"></i> */}
            {/* <PhotoCameraIcon className="border border-dark" /> */}
            <WebcamCapture image={image} setImage={setImage} postImage={postImage} setPostImage={setPostImage} />
          </label>
        </div>
        {/* <img
          
          src = {image}
          className="ImgPreview my-3 rounded bg-secondary bg-gradient"
          style={showImg ? "" : {"display":"hidden"}}
          alt="Preview"
        /> */}
        <button type="button" className="btn btn-outline-success my-3 " onClick={handleSubmit}>
          Generate Result
        </button>
      </div>
    </div>
  );
};
export default HomeInput;
