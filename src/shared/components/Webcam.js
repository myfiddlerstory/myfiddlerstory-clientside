
import React, { PureComponent, Fragment } from 'react'
import Webcam from 'react-webcam'
class WebcamCapture extends PureComponent {

    static recorder 
    constructor(props) {
        super(props);

        this.state = {
            constraints: { audio: true, video: { width: 400, height: 300 } },
            videoSource : "",
            isShowVideo: false
        };

        this.handleStartClick = this.handleStartClick.bind(this);
        
    }


    componentDidMount() {
        const constraints = this.state.constraints;
        const getUserMedia = (params) => (
            new Promise((successCallback, errorCallback) => {
                navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
            })
        );

        getUserMedia(constraints)
            .then((stream) => {
                const video = document.querySelector('video');
                console.log("Video Instance", video)
                 this.recorder = RecordRTC(stream, {
                     type: "video"
                 })
                // const vendorURL = window.URL || window.webkitURL;
                console.log("Video Stream", stream)
                video.srcObject = stream
                this.recorder.stream = stream;
                video.play();
            })
            .catch((err) => {
                console.log("Error",err);
            });

        // this.clearPhoto();
    }

    handleStartClick(event) {
        event.preventDefault();
        this.recorder.startRecording();
        // this.takePicture();
    }

    stopRecording = () => {
        console.log("on Stop Recordig", this.recorder.getDataURL((data) => {
            console.log("Data", data)
            this.setState({
                videoSource : data,
                isShowVideo: true
            })
        }))
       this.recorder.stopRecording()
    }

    render() {
        const {isShowVideo, videoSource} = this.state
        return (
            <div className="capture">
                <div className="camera">
                    <video id="video"></video>
                    <a id="startButton"
                        onClick={this.handleStartClick}
                    >Start Recording</a>
                </div>
                <canvas id="canvas"
                    hidden
                ></canvas>
                <div className="output">
                    <img id="photo" alt="Your photo"/>
                    <a id="saveButton"
                        onClick={this.stopRecording}
                    >Stop Recording</a>
                </div>
                {isShowVideo && 
                    <video controls>
                    <source type="video/webm" src={videoSource}/>
                </video>
                }
            </div>
        );
    }


}

//     setRef = webcam => {
//       this.webcam = webcam;
//     };

//     capture = () => {
//       const imageSrc = this.webcam.getScreenshot();
//     //   console.log("Image src", imageSrc)
//     };

//     handleUserMedia = () => {
//         const stream = this.webcam.stream;
//         console.log("Webcam Stream", stream)
//     }

//     render() {
//       const videoConstraints = {
//         width: 1280,
//         height: 720,
//         facingMode: "user"
//       };

//       return (
//         <div>
//           <Webcam
//             audio={false}
//             height={350}
//             ref={this.setRef}
//             screenshotFormat="image/jpeg"
//             width={350}
//             videoConstraints={videoConstraints}
//             onUserMedia={this.handleUserMedia}
//           />
//           <button onClick={this.capture}>Capture photo</button>
//         </div>
//       );
//     }
//   }


export default WebcamCapture