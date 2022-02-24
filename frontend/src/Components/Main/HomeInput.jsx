import React from "react";
import HomeHeader from "./HomeHeader";
import './index.css';
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const HomeInput = () => {
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
          <h4 className="my-3">Or</h4>
          <label>
            Capture Photo :  
            <i className="fas fa-camera"></i>
            {/* <PhotoCameraIcon className="border border-dark" /> */}
          </label>
        </div>
        <img
          src=" "
          className="ImgPreview my-3 rounded bg-secondary bg-gradient"
          alt="Preview"
        />
        <button type="button" className="btn btn-outline-success my-2 ">
          Generate Result
        </button>
      </div>
    </div>
  );
};
export default HomeInput;
