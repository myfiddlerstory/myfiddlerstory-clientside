import React, {PureComponent} from 'react'
import {hostUrl} from '../helper'
import axios from 'axios'
import {connect} from 'react-redux'

//impprt css
import './PublicAnswers.css'
//import actions
import {initUser} from '../../reducers/Questions/action'


import Navigator from '../Navigator'
import AppContainer from '../AppContainer'
import PublicIds from './PublicIds';
import Answers from './Answers';


class PublicAnswers extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedTab : "first",
            visible : false,
            idList: [],
            answerData : {}
        }
    }


    componentDidMount = () => {
        const {initUser} = this.props
        let url = `${hostUrl}/fetch_first_generation_documentid`
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }
        axios.post(url, {}, config)
        .then(data => {
            console.log("First Generation Data", data)
            if(data && data.data && data.data.length){
                initUser(data.data)
                this.setState({
                    idList: data.data
                })
            }
           
        })
        .catch(error => {
            console.error("First Generation error", error)
        })
    }

    onSelectFirstGeneration = () => {
        this.setState({
            selectedTab : "first",
            answerData: {},
            idList: []
        })
        const {initUser} = this.props
        let url = `${hostUrl}/fetch_first_generation_documentid`
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }
        axios.post(url, {}, config)
        .then(data => {
            console.log("First Generation Data", data)
            if(data && data.data && data.data.length){
                initUser(data.data)
                this.setState({
                    idList: data.data
                })
            }
           
        })
        .catch(error => {
            console.error("First Generation error", error)
        })
    }

    onSelectSecondGeneration = () => {
        this.setState({
            selectedTab: "second",
            answerData: {},
            idList: []
        })
        const {initUser} = this.props
        let url = `${hostUrl}/fetch_second_generation_documentid`
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }
        axios.post(url, {}, config)
        .then(data => {
            console.log("Second Generation Data", data)
            if(data && data.data && data.data.length){
                initUser(data.data)
                this.setState({
                    idList: data.data
                })
            }
           
        })
        .catch(error => {
            console.error("Second Generation error", error)
        })
    }

    onOpenSidebar = () => {
        this.setState({
            visible: true
        })
    }

    onCloseSidebar = () => {
        this.setState({
            visible: false
        })
    }

    onFetchData = (id) => {
        const {selectedTab} = this.state
        let url = `${hostUrl}`
        if(selectedTab === "first"){
            url = `${url}/FirstGeneration_Survey_Information_ByDocumentID`
        } else{
            url = `${url}/SecondGeneration_Survey_Information_ByDocumentID`
        }
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }
        let formData = {
            documentID : id
        }

        axios.post(url, formData, config)
        .then(data => {
            console.log("Answer Data", data)
            this.setState({
                answerData : data.data
            })
        })
        .catch(error => {
            console.log("Error", error)
        })

    }
    render(){
        const {visible, selectedTab, idList, answerData} = this.state
        let firstStyle = {}
        let secondStyle = {}
        if(selectedTab === "first"){
            firstStyle = {
                borderBottom: "2px solid "
            }
        } else{
            secondStyle = {
                borderBottom: "2px solid "
            }
        }
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
            <AppContainer isMenuVisible={true} onOpenSidebar={this.onOpenSidebar}>
            <div>
                <div className="public-answers-tab-container">
                    <div className="public-answers-tab" style={firstStyle} onClick={this.onSelectFirstGeneration}>First Generation</div>
                    <div className="public-answers-tab" style={secondStyle} onClick={this.onSelectSecondGeneration}>Second Generation</div>
                </div>
                <div className="public-answers-data">
                    <PublicIds idList={idList} onFetchData={this.onFetchData}/>
                    <Answers answerData={answerData} type={selectedTab}/>
                </div>
            </div>
            </AppContainer>
            </Navigator>
        )
    }
}
const mapActionToProps = {
    initUser
}


export default connect(null, mapActionToProps)(PublicAnswers) 