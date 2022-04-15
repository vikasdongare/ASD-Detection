import React, { useState } from "react";
import HomeInput from "./HomeInput";
import HomeOutput from "./HomeOutput";
import Menubar from "./Menubar";
import './index.css';
// import UserProfile from "./UserProfile";

const MainBody = () => {

  const [predicted_output, setPredictedOutput] = useState(null);

  return (
    <div className="container">
      <div className=" MainBody border d-flex rounded-3 shadow-lg border-dark" style={{ "height": "80vh", "width": "140vh" }}>
        <Menubar />
        <HomeInput predicted_output={predicted_output} setPredictedOutput={setPredictedOutput} />
        <HomeOutput predicted_output={predicted_output} setPredictedOutput={setPredictedOutput} />
      </div>
    </div>
  );
};
export default MainBody;
