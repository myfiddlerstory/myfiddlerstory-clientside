/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent, Fragment } from 'react'
import { Modal, Form, Radio, Input } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { hostUrl } from '../helper'

//import css
import './SubmitDialog.css'

class SubmitDialog extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            email: "",
            fullName: ""
        }
    }

    handleChange = (e, { value }) => this.setState({ value })
    onCloseDialog = () => {
        const { onDialogStateChange } = this.props
        onDialogStateChange(false)
    }


    onSubmit = () => {
        const { type,
            firstValue,
            secondValueA,
            secondValueB,
            secondValueC,
            secondValueD,
            thirdValue,
            thirdValueA,
            thirdValueB,
            thirdValueC,
            thirdValueD,
            fourthValue,
            fourthValueA,
            fourthValueB,
            fourthValueC,
            fifthValue,
            fifthValueA,
            fifthValueB,
            fifthValueC,
            sixthValue,
            seventhValue,
            eighth,
            ninthValue,
            tenthValue,
            eleventhValue,
            twelvethValue,
            thirteenthValue,
            thirteenthValueA,
            thirteenthValueB,
            fourteenthValue,
            fifteenthValue,
            sixteenthValue,
            seventeenthValue,
            eighteenthValue,
            nineteenthValue,
            twentithValue,
            twentyFirstValue,
            twentySecondValue,
            twentyThirdValue,
            video , onDialogStateChange} = this.props
        const { email, fullName, value } = this.state
        let Anonymous = false
        if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            console.log("EMail")
            return
        }
        if (value === "private" || (!email && !fullName)) {
            Anonymous = true
        }
        let questionObj = {
            FullName: fullName || "",
            EmailAddress: email || "",
            Anonymous: Anonymous,
        }
        let videoObj = {}
        if(video){
            videoObj = {video}
        }
        let url = `${hostUrl}`
        if (type === "first") {
            url = `${url}/add_survey_information`
            questionObj = {
                ...questionObj,
                question1_blank1: firstValue || "",
                question2_blank1: secondValueA|| "",
                question2_blank2: secondValueB|| "",
                question2_blank3: secondValueC|| "",
                question3_blank1: thirdValue|| "",
                question4_blank1: fourthValue|| "",
                question5_blank1: fifthValue|| "",
                question6_blank1: sixthValue|| "",
                question7_blank1: seventhValue|| "",
                question8_blank1: eighth|| "",
                question9_blank1: ninthValue|| "",
                question10_blank1: tenthValue|| "",
                question11_blank1: eleventhValue|| "",
                question12_blank1: twelvethValue|| "",
                question13_blank1: thirteenthValueA|| "",
                question13_blank2: thirteenthValueB|| "",
                question14_blank1: fourteenthValue|| "",
                question15_blank1: fifteenthValue|| "",
                question16_blank1: sixteenthValue|| "",
                question17_blank1: seventeenthValue|| "",
                question18_blank1: eighteenthValue|| "",
                question19_blank1: nineteenthValue|| "",
                question20_blank1: twentithValue|| "",
                question21_blank1: twentyFirstValue|| "",
                question22_blank1: twentySecondValue|| "",
                question23_blank1: twentyThirdValue|| "",
                link:video
        
            }
        } else if (type === "second") {
            console.log("Enter Second")
            url = `${url}/add_second_generation_survey_information`
            questionObj = {
                ...questionObj|| "",
                 question1_blank1 : firstValue|| "",
                 question2_blank1 : secondValueA|| "", 
                 question3_blank1 : thirdValueA|| "",
                 question3_blank2 : thirdValueB|| "",
                 question3_blank3 : thirdValueC|| "",
                 question3_blank4 : thirdValueD|| "",
                 question4_blank1 : fourthValue|| "",
                 question5_blank1 : fifthValueA|| "",
                 question5_blank2 : fifthValueB|| "",
                 question5_blank3 : fifthValueC|| "",
                 question6_blank1 : sixthValue|| "",
                 question7_blank1 : seventhValue|| "",
                 question8_blank1 : eighth|| "",
                 question9_blank1 : ninthValue|| "",
                 question10_blank1 : tenthValue|| "",
                 question11_blank1 : eleventhValue|| "",
                 question12_blank1 : twelvethValue|| "",
                 question13_blank1 : thirteenthValue|| "",
                 question14_blank1 : fourteenthValue|| "",
                 question15_blank1 : fifteenthValue|| "",
                 question16_blank1 : sixteenthValue|| "",
                 link: video
            }
        }
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }
        if(value){
            console.log("Api Calling")
            axios.post(url, questionObj, config)
                .then((data) => {
                    console.log("Successfully Submiited", data)
                   
                    onDialogStateChange(false)
                })
                .catch(error => {
                    console.error("Error in submitting response", error)
                })
        }
       
    }


    onChangeEmail = (e, data) => {
        this.setState({
            email: data.value
        })
    }

    onChangeFullName = (e, data) => {
        this.setState({
            fullName: data.value
        })
    }
    render() {
        const { isDialogOpened, } = this.props
        let buttonStyle = {}, modalClassname = "submit-dialog-modal"
        if (this.state.value === "public") {
            buttonStyle = {
                marginTop: "30px"
            }
            modalClassname = `submit-dialog-modal-public`
        }
        return (
            <Modal open={isDialogOpened} onClose={this.onCloseDialog} className={modalClassname}>
                <div className="submit-dialog-container">
                    <div className="submit-dialog-heading-text">I would like my personal story to be  </div>
                    <div className="submit-dialog-radio-button-container">
                        <Form.Field>
                            <Radio
                                label='Shared publicly including my name.'
                                name='radioGroup'
                                value='public'
                                checked={this.state.value === 'public'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field style={{ marginTop: "20px" }}>
                            <Radio
                                label='Shared Anonymously. No name.'
                                name='radioGroup'
                                value='private'
                                checked={this.state.value === 'private'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        {this.state.value === "public" &&
                            <Fragment>
                                <div style={{ marginTop: "20px" }}>
                                    <Input type="text" fluid placeholder="Enter Full Name" onChange={this.onChangeFullName} />
                                    <Input type="email" fluid placeholder="Enter Email" style={{ marginTop: "10px" }} onChange={this.onChangeEmail} />
                                </div>


                            </Fragment>
                        }
                    </div>
                    <Link to={"/success"}>
                        <div className="submit-dialog-button-container" style={buttonStyle}>
                            <div className="submit-dialog-button" onClick={this.onSubmit}>Done</div>
                        </div>
                    </Link>

                </div>
            </Modal>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let questionById = state.FiddlerReducer.question.byId
    let firstValue,
        secondValueA,
        secondValueB,
        secondValueC,
        secondValueD,
        thirdValue,
        thirdValueA,
        thirdValueB,
        thirdValueC,
        thirdValueD,
        fourthValue,
        fourthValueA,
        fourthValueB,
        fourthValueC,
        fifthValue,
        fifthValueA,
        fifthValueB,
        fifthValueC,
        sixthValue,
        seventhValue,
        eighth,
        ninthValue,
        tenthValue,
        eleventhValue,
        twelvethValue,
        thirteenthValue,
        thirteenthValueA,
        thirteenthValueB,
        fourteenthValue,
        fifteenthValue,
        sixteenthValue,
        seventeenthValue,
        eighteenthValue,
        nineteenthValue,
        twentithValue,
        twentyFirstValue,
        twentySecondValue,
        twentyThirdValue,
        video
    if (questionById) {
        if (questionById["0"]) {
            firstValue = questionById["0"].answer.value
        }
        if (questionById["1"]) {
            secondValueA = questionById["1"].answer.a
        }
        if (questionById["1"]) {
            secondValueB = questionById["1"].answer.b
        }
        if (questionById["1"]) {
            secondValueC = questionById["1"].answer.c
        }
        if (questionById["1"]) {
            secondValueD = questionById["1"].answer.d
        }
        if (questionById["2"]) {
            thirdValue = questionById["2"].answer.value
            thirdValueA = questionById["2"].answer.a
            thirdValueB = questionById["2"].answer.b
            thirdValueC = questionById["2"].answer.c
            thirdValueC = questionById["2"].answer.d
        }
        if (questionById["3"]) {
            fourthValue = questionById["3"].answer.value
            fourthValueA = questionById["3"].answer.a
            fourthValueB = questionById["3"].answer.b
            fourthValueC = questionById["3"].answer.c
        }
        if (questionById["4"]) {
            fifthValue = questionById["4"].answer.value
            fifthValueA = questionById["4"].answer.a
            fifthValueB = questionById["4"].answer.b
            fifthValueC = questionById["4"].answer.c
        }
        if (questionById["5"]) {
            sixthValue = questionById["5"].answer.value

        }

        if (questionById["6"]) {
            seventhValue = questionById["6"].answer.value
        }

        if (questionById["7"]) {
            eighth = questionById["7"].answer.value
        }

        if (questionById["8"]) {
            ninthValue = questionById["8"].answer.value
        }

        if (questionById["9"]) {
            tenthValue = questionById["9"].answer.value
        }

        if (questionById["10"]) {
            eleventhValue = questionById["10"].answer.value
        }
        if (questionById["11"]) {
            twelvethValue = questionById["11"].answer.value
        }

        if (questionById["12"]) {
            thirteenthValue = questionById["12"].answer.value
            thirteenthValueA = questionById["12"].answer.a
            thirteenthValueB = questionById["12"].answer.b
        }

        if (questionById["13"]) {
            fourteenthValue = questionById["13"].answer.value
        }
        if (questionById["14"]) {
            fifteenthValue = questionById["14"].answer.value
        }

        if (questionById["15"]) {
            sixteenthValue = questionById["15"].answer.value
        }

        if (questionById["16"]) {
            seventeenthValue = questionById["16"].answer.value
        }

        if (questionById["17"]) {
            eighteenthValue = questionById["17"].answer.value
        }

        if (questionById["18"]) {
            nineteenthValue = questionById["18"].answer.value
        }

        if (questionById["19"]) {
            twentithValue = questionById["19"].answer.value
        }

        if (questionById["20"]) {
            twentyFirstValue = questionById["20"].answer.value
        }

        if (questionById["21"]) {
            twentySecondValue = questionById["21"].answer.value
        }

        if (questionById["22"]) {
            twentyThirdValue = questionById["22"].answer.value
        }
        video = state.FiddlerReducer.video
    }


    return {
        firstValue,
        secondValueA,
        secondValueB,
        secondValueC,
        secondValueD,
        thirdValue,
        thirdValueA,
        thirdValueB,
        thirdValueC,
        thirdValueD,
        fourthValue,
        fourthValueA,
        fourthValueB,
        fourthValueC,
        fifthValue,
        fifthValueA,
        fifthValueB,
        fifthValueC,
        sixthValue,
        seventhValue,
        eighth,
        ninthValue,
        tenthValue,
        eleventhValue,
        twelvethValue,
        thirteenthValue,
        thirteenthValueA,
        thirteenthValueB,
        fourteenthValue,
        fifteenthValue,
        sixteenthValue,
        seventeenthValue,
        eighteenthValue,
        nineteenthValue,
        twentithValue,
        twentyFirstValue,
        twentySecondValue,
        twentyThirdValue,
        video
    }
}

export default connect(mapStateToProps, null)(SubmitDialog)