import React, { useState } from "react";
import WebcamCapture from "../WebcamCapture";
import HomeHeader from "./HomeHeader";
import './index.css';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs';


const HomeInput = (props) => {


  const [image, setImage] = useState(null);
  const [capturedImage, setcapturedImage] = useState(null);

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
        // console.log(response);
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
    document.getElementById("selectFile").value = '';

    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {

      document.getElementById("selectedImg").src = reader.result;
      uploadImage(document.getElementById("selectedImg").src)
      makePrediction(document.getElementById("selectedImg"));

    }

  }

  const selectedHandleSubmit = async (e) => {
    e.preventDefault();
    setcapturedImage('');

    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {

      document.getElementById("selectedImg").src = reader.result;
      uploadImage(document.getElementById("selectedImg").src)
      makePrediction(document.getElementById("selectedImg"));

    }
  }

  const makePrediction = async (input) => {

    const modelJson = 'http://localhost:5000/model/model.json';
    const model = await tf.loadLayersModel(modelJson);

    let tensor = tf.browser.fromPixels(input)
      .resizeNearestNeighbor([64, 64])
      .toFloat()
      .expandDims();

    const output = model.predict(tensor);
    const prediction = await output.data();
    setPredictionOutput(prediction[0]);
    storeResult(props.submittedImg, props.predicted_output)
    // console.log(res);
  }

  const storeResult = async (img, result) => {
    const res = await fetch("http://localhost:5000/history/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({
        imagelink: img,
        result: result
      })
    });
  }

  const setPredictionOutput = (output) => {
    if (output >= 0.5) {
      props.setPredictedOutput("Non-Autistic");
    } else {
      props.setPredictedOutput("Autistic");
    }
  }

  return (
    <div data-testid="homeInput-component" className=" InputContent p-2 ">
      <div className=" content border border-dark rounded-3 d-flex flex-column align-items-center ">
        <HomeHeader heading="Input Image" />
        <div className=" text-center mt-5 form-group ">
          <label> Select a file : &nbsp;</label>
          <input id="selectFile"
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
            <WebcamCapture image={image} setImage={setImage} capturedImage={capturedImage} setcapturedImage={setcapturedImage} />
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
