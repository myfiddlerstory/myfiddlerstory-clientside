/**
 * Created By Nikita Mittal
 * 19th JUne 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'semantic-ui-react'

//import css
import './WebcamDialog.css'

//import icons
import CloseIcon from '../../icons/close_icon.svg'

class WebcamDialog extends PureComponent {
    static recorder
    constructor(props) {
        super(props);

        this.state = {
            constraints: { audio: true, video: { width: 710, height: 400 } },
            videoSource: "",
            isShowVideo: false,
            isRecordingStarted: false
        };

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
                this.recorder = RecordRTC(stream, {
                    type: "video"
                })
                video.srcObject = stream
                this.recorder.stream = stream;
                video.play();
            })
            .catch((err) => {
                console.log("Error", err);
            });

        // this.clearPhoto();
    }

    startRecording = (event) => {
        event.preventDefault();
        this.setState({
            isRecordingStarted: true
        })
        this.recorder.startRecording();
        // this.takePicture();
    }

    stopRecording = () => {
        this.recorder.getDataURL((data) => {
            this.setState({
                videoSource: data,
                isShowVideo: true,
                isRecordingStarted: false
            })
        })
        this.recorder.stopRecording()
    }
    render() {
        const { isDialogOpened, onCloseDialog } = this.props
        const { isShowVideo, isRecordingStarted, videoSource } = this.state
        return (
            <Modal open={isDialogOpened} className="webcam-dialog-container">
                <div className="webcam-dialog-close-container" onClick={onCloseDialog}>
                    <img src={CloseIcon} style={{width: "20px"}}/>
                </div>
                <div className="webcam-video-container">
                    <div className="camera">
                        {!isShowVideo && <video id="video"></video>}
                        {isShowVideo && <video controls style={{width: 710, height: 400}}>
                            <source type="video/webm" src={videoSource} />
                        </video>}
                        <div className="webcam-dialog-button-container">
                        {!isRecordingStarted && !isShowVideo && <div className="webcam-dialog-start-stop-container" onClick={this.startRecording}>Start Recording</div>}
                        {isRecordingStarted && <div className="webcam-dialog-start-stop-container" onClick={this.stopRecording}>Stop Recording</div>}
                        {isShowVideo && <Fragment>
                            <div className="webcam-dialog-start-stop-container" style={{marginRight:"10px"}} onClick={onCloseDialog}>Save</div>
                            <div className="webcam-dialog-start-stop-container" style={{marginLeft:"10px"}} onClick={onCloseDialog}>Cancel</div>
                        </Fragment>}
                        </div>
                       
                        

                    </div>
                  
                </div>
            </Modal>
        )
    }
}

export default WebcamDialog