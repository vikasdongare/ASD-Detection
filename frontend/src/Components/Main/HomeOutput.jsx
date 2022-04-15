import React from "react";
import HomeHeader from "./HomeHeader";
import './index.css';
// import SemiCircleProgressBar from "react-progressbar-semicircle";

const HomeOutput = (props) => {
  return (
    <div className=" InputContent p-2">
      <div className=" content border border-dark rounded-3 d-flex flex-column align-items-center ">
        <HomeHeader heading="Result" />
        <div className="guessMeter mt-5 text-center">
          {/* <SemiCircleProgressBar percentage={75} /> */}
          {/* <h3 className="my-5">{props.predicted_output != null ? props.predicted_output : "75%"}</h3> */}

        </div>
        <div className="outputInfo border border-dark rounded mb-2"></div>
      </div>
    </div>
  );
};
export default HomeOutput;