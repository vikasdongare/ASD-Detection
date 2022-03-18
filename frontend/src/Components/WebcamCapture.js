import React, { useState } from 'react';
import Webcam from "react-webcam";


// const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 64,
    height: 64,
    facingMode: "user"
};

function WebcamCapture(props) {

    const [capturedImage, setcapturedImage] = useState(null);
    const webcamRef = React.useRef(null);

    async function dataUrlToFile(dataUrl) {

        const res = await fetch(dataUrl);
        const blob = await res.blob();
        return new File([blob], Date.now() + '.jpeg', { type: 'image/jpeg' });
    }

    const capture = React.useCallback(
        async () => {
            const imageSrc = webcamRef.current.getScreenshot();
            const newImage = await dataUrlToFile(imageSrc, imageSrc);
            props.setImage(newImage);
            setcapturedImage(imageSrc);
        });

    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {capturedImage === '' ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img id="inputImg" src={capturedImage} alt="Preview" />}
            </div>
            <div>
                {capturedImage !== '' ?
                    <button type="button" className="btn btn-outline-warning my-2 "
                        onClick={(e) => {
                            e.preventDefault();
                            props.setImage('');
                            setcapturedImage('');
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