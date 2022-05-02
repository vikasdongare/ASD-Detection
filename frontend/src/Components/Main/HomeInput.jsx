import React, { useState } from "react";
import WebcamCapture from "../WebcamCapture";
import HomeHeader from "./HomeHeader";
import './index.css';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs';
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const HomeInput = (props) => {


  const [image, setImage] = useState(null);

  const uploadImage = async () => {

    const formData = new FormData();
    formData.append('image', image);

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
        console.log(response);
        if (response.data.message === "Success") {
          alert('Image Uploaded Suceesfully!');
        }
        if (response.data.path) {
          props.setSubmittedImg(response.data.path);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setImage(e.target.files[0]);
  }

  const WebCamHandleSubmit = async (e) => {
    e.preventDefault();

    uploadImage(document.getElementById("selectedImg").src)
    // console.log(document.getElementById("inputImg").src)

    makePrediction(document.getElementById("selectedImg"));

  }

  const selectedHandleSubmit = async (e) => {
    e.preventDefault();

    uploadImage(document.getElementById("selectedImg").src)


    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {

      document.getElementById("selectedImg").src = reader.result;
      // console.log(document.getElementById("selectedImg"))

      makePrediction(document.getElementById("selectedImg"));

    }
  }

  const makePrediction = async (input) => {

    const model = await tf.loadLayersModel('http://localhost:5000/model/model.json');

    let tensor = tf.browser.fromPixels(input)
      .resizeBilinear([64, 64])
      .toFloat()
      .expandDims(0);

    const output = model.predict(tensor);
    const prediction = output.dataSync();
    setPredictionOutput(prediction[0]);
    console.log(prediction[0]);

    const res = await fetch("http://localhost:5000/history/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({
        imagelink: props.submittedImg,
        result: props.predicted_output
      })
    });

    // console.log(res);
  }

  const setPredictionOutput = (output) => {
    if (output >= 0.5) {
      props.setPredictedOutput("Non-Autistic");
    } else {
      props.setPredictedOutput("Autistic");
    }
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
          <img id="selectedImg" alt="Preview" style={{ "display": "none" }}></img>
          <button type="button" className="btn btn-outline-success my-3 " onClick={selectedHandleSubmit}>
            Generate Result
          </button>
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
        <button type="button" className="btn btn-outline-success my-3 " onClick={WebCamHandleSubmit}>
          Generate Result
        </button>
      </div>
    </div>
  );
};
export default HomeInput;
