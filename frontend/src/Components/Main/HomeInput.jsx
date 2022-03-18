import React, { useState } from "react";
import WebcamCapture from "../WebcamCapture";
import HomeHeader from "./HomeHeader";
import './index.css';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs';
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const HomeInput = () => {


  const [image, setImage] = useState(null);
  const [showImg, setShowImg] = useState(false);

  const generateResult = React.useCallback(
    async () => {
      setShowImg(true);
      const model = await tf.loadLayersModel('http://localhost:5000/model/model.json');
      // const prediction = model.predict(image);
      console.log(model);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    generateResult();

    const formData = new FormData();
    formData.append('Image', image);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'auth-token': localStorage.getItem('token')
      }
    };

    const url = "http://localhost:5000/report/upload";
    axios
      .post(url, formData, config)
      .then((response) => {
        // console.log(response);
        alert('Image Uploaded Suceesfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setImage(e.target.files[0]);
  }

  return (
    <div className=" InputContent p-2 ">
      <div className=" content border border-dark rounded-3 d-flex flex-column align-items-center ">
        <HomeHeader heading="Input Image" />
        <div className=" text-center mt-5 form-group ">
          <label> Select a file : &nbsp;</label>
          <input
            type="file"
            className="form-control-file border border-dark"
            onChange={onChange}
          ></input>
          <br />
          <h4 className="my-5">Or</h4>
          <label>
            {/* Capture Photo :  
            <i className="fas fa-camera"></i> */}
            {/* <PhotoCameraIcon className="border border-dark" /> */}
            <WebcamCapture image={image} setImage={setImage} />
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
