import React, { useState } from 'react';
import Webcam from "react-webcam";


// const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

function WebcamCapture(props) {

    const webcamRef = React.useRef(null);


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            props.setImage(imageSrc)
        });

    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {props.image === '' ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img id="inputImg" src={props.image} alt="Preview" />}
            </div>
            <div>
                {props.image !== '' ?
                    <button button type="button" className="btn btn-outline-warning my-2 "
                        onClick={(e) => {
                            e.preventDefault();
                            props.setImage('')
                        }}
                    >
                        Retake Image</button> :
                    <button type="button" className="btn btn-outline-warning my-2 "
                        onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                    >Capture</button>
                }
            </div>
        </div>
    );
}

export default WebcamCapture