/**
 * Created By Nikita Mittal
 * 19th JUne 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'

//import css
import './WebcamDialog.css'

//import actions
import {storeVideoAction} from '../../reducers/Questions/action'

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
        const {video} = this.props
        if(video){
            this.setState({
                isShowVideo: true,
                videoSource: video
            })
        }
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
    }

    startRecording = (event) => {
        event.preventDefault();
        this.setState({
            isRecordingStarted: true
        })
        this.recorder.startRecording();
       
    }

    stopRecording = () => {
        const {storeVideoAction} = this.props
        this.recorder.getDataURL((data) => {
            console.log("Data", data)
            this.setState({
                videoSource: data,
                isShowVideo: true,
                isRecordingStarted: false
            })
            storeVideoAction(data)
        })
       
        this.recorder.stopRecording()
    }

    onCancel = () => {
        const {onCloseDialog, storeVideoAction, isReview} = this.props
        if(!isReview){
            storeVideoAction("")
        }
       
        onCloseDialog()
    }

    onReploadUpload = () => {
        const {onCloseDialog, storeVideoAction} = this.props
        this.setVideo()
        this.setState({
            isRecordingStarted: false,
            videoSource: "",
            isShowVideo: false,
        })
        storeVideoAction("")
    }

    setVideo = () => {
        let constraints = this.state.constraints
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
    }
    render() {
        const { isDialogOpened, onCloseDialog, isReview } = this.props
        const { isShowVideo, isRecordingStarted, videoSource } = this.state
        return (
            <Modal open={isDialogOpened} className="webcam-dialog-container">
                <div className="webcam-dialog-close-container" onClick={this.onCancel}>
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
                        {isShowVideo && !isReview && <Fragment>
                            <div className="webcam-dialog-start-stop-container" style={{marginRight:"10px"}} onClick={onCloseDialog}>Save</div>
                            <div className="webcam-dialog-start-stop-container" style={{marginLeft:"10px"}} onClick={this.onCancel}>Cancel</div>
                        </Fragment>}
                        {isShowVideo && isReview && 
                        <div className="webcam-dialog-start-stop-container" onClick={this.onReploadUpload}>ReUpload</div>
                        }
                        </div>
                       
                        

                    </div>
                  
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapActionsToProps = {
    storeVideoAction
}

export default connect(null, mapActionsToProps)(WebcamDialog)