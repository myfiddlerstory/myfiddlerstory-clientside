/**
 * Created By Nikita Mittal
 * 18th June 2019
 */

import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import map from 'lodash/map'
import { TextArea, Input, Form } from 'semantic-ui-react'

//import css
import './Questions.css'

//import components
import CustomScrollbar from '../CustomScrollbar'
import QuestionFooter from './QuestionFooter'
import VideoIcon from '../../icons/video_icon.png'

//import questions
import { firstGenerationQuestions, secondGenerationQuedstions } from '../dataHelper'
//import actions
import { initQuestions, findQuestionById, populateAnswer } from '../../reducers/Questions/action'
import WebcamDialog from '../WebcamDialog/WebcamDialog';

class Questions extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            isDialogOpened: false,
            isFinishButtonVisible: false,
            answeredQuestions: 0
        }
    }

    changeDialogState = (value) => {
        this.setState({
            isDialogOpened: value,

        })
    }

    onOpenDialog = () => {
        this.changeDialogState(true)
    }

    onCloseDialog = () => {
        this.changeDialogState(false)
    }
    componentDidMount = () => {
        const { location, history, initQuestions } = this.props
        const video = document.querySelector('video');
        console.log("Video Instance", video)
        if (location) {
            if (location.type === "first") {
                initQuestions(firstGenerationQuestions)
            } else if (location.type === "second") {
                initQuestions(secondGenerationQuedstions)
            } else {
                history.push("/")
            }
        } else {
            history.push("/")
        }
    }

    getQuestions = () => {
        const { questionIds, findQuestionById } = this.props
        return map(questionIds, (questionId, index) => {
            let question = findQuestionById(questionId)
            return (
                <div key={index}>
                    {question && question.title && <div>{question.title}</div>}
                </div>
            )
        })
    }

    incrementQuestion = () => {
        const { answeredQuestions } = this.state
        this.setState({
            answeredQuestions: answeredQuestions + 1
        })
    }

    decrementQuestion = () => {
        const { answeredQuestions } = this.state
        if (answeredQuestions !== 0) {
            this.setState({
                answeredQuestions: answeredQuestions - 1
            })
        }
    }

    onFirst = (e, data) => {
        const { populateAnswer } = this.props
        if (data) {
            if (data.value) {
                let value = data.value
                populateAnswer("0", { value })
                this.incrementQuestion()
            } else {
                this.decrementQuestion()
            }
        }

    }


    onSecondA = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("1", { a: data.value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onSecondB = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("1", { b: data.value })
            // this.incrementQuestion()
        } else {
            // this.decrementQuestion()
        }
    }

    onSecondC = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("1", { c: data.value })
            // this.incrementQuestion()
        } else {
            // this.decrementQuestion()
        }
    }

    onSecondD = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("1", { d: data.value })
            // this.incrementQuestion()
        } else {
            // this.decrementQuestion()
        }
    }

    onThird = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("2", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onThirdA = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("2", { a: value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onThirdB = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("2", { b: value })
        }
    }

    onThirdC = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("2", { c: value })
        }
    }

    onThirdD = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("2", { d: value })
        }
    }

    onFourth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("3", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onFourthA = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("3", { a: data.value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onFourthB = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("3", { b: data.value })
        } else {

        }
    }

    onFourthC = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("3", { c: data.value })
        }
    }

    onFifth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("4", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onFifthA = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("4", { a: value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onFifthB = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("4", { b: value })
        }
    }

    onFifthC = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("4", { c: value })
        }
    }

    onSixth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("5", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onSeven = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("6", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onEight = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("7", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onNinth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("8", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onTenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("9", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onEleventh = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("10", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onTwelveth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("11", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onThirteenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("12", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onThirteenthA = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("12", { a: data.value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onThirteenthB = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            populateAnswer("12", { b: data.value })
        }
    }

    onFourteenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("13", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onFifteenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("14", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onSixteenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("15", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onSeventeenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("16", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onEighteenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("17", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onNineteenth = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("18", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onTwentith = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("19", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onTwentyFirst = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("20", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onTwentySecond = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("21", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onTwentyThird = (e, data) => {
        const { populateAnswer } = this.props
        if (data && data.value) {
            let value = data.value
            populateAnswer("22", { value })
            this.incrementQuestion()
        } else {
            this.decrementQuestion()
        }
    }

    onHandleScroll = (event) => {
        this.isScrolledIntoView()

    }

    isScrolledIntoView = () => {
        const { location } = this.props
        if (location) {
            let el
            if (location.type === "first") {
                el = document.getElementById("first-last")
            } else if (location.type === "second") {
                el = document.getElementById("second-last")
            }
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;

            // Only completely visible elements return true:
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            // Partially visible elements return true:
            //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
            if (isVisible) {
                this.setState({
                    isFinishButtonVisible: true
                })
            }
            return isVisible;
        }

    }



    render() {
        const { location } = this.props
        const { isFinishButtonVisible } = this.state
        return (
            <Fragment>
                <div style={{ display: "table-row", height: "100%" }}>
                    <div className="questions-container">

                        {location && location.type &&
                            <CustomScrollbar onScroll={this.onHandleScroll}>
                                <div className="questions-all-data-container">
                                    {location.type === "first" &&
                                        <Fragment>
                                            {/* First Question */}
                                            <div className="questions-data-container" style={{ marginTop: "20px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div>Q1.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I was born in the year</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFirst} onBlur={this.onFirstBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Second Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q2.</div>
                                                    <div className="questions-data" style={{ position: "relative", top: "-10px" }}>
                                                        <span>In </span>
                                                        <span className="input-container">
                                                            <Input placeholder="Enter Year" onChange={this.onSecondA} onBlur={this.onSecondABlur} />
                                                        </span>
                                                        <span> I Left </span>
                                                        <span className="input-container">
                                                            <Input placeholder="Enter Country/ City" onChange={this.onSecondB} onBlur={this.onSecondBBlur} />
                                                        </span>
                                                        <span> and went to </span>
                                                        <br />
                                                        <span style={{ lineHeight: "60px" }}>
                                                            <Input placeholder="Enter Country/ City" onChange={this.onSecondC} onBlur={this.onSecondCBlur} />
                                                        </span>

                                                    </div>
                                                </div>

                                            </div>

                                            {/* Third Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q3.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I now Live in</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onThird} onBlur={this.onThirdBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Fourth Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q4.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">Three words to describe what it felt like to leave the country I was born in…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFourth} onBlur={this.onFourthBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Fifth Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q5.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">The most surprising thing about the journey was…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFifth} onBlur={this.onFifthBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Sixth Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q6.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">The hardest thing about the journey was…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onSixth} onBlur={this.onSixthBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Seventh Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q7.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">The scariest thing about the journey was…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onSeven} onBlur={this.onSevenBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Eigth Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q8.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">One lovely thing that I can remember about the journey was…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onEight} onBlur={this.onEightBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Ninth Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q9.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">My most treasured possession that I brought with me was….</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onNinth} onBlur={this.onNinthBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tenth Question */}
                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q10.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I brought it because….</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTenth} onBlur={this.onTenthBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q11.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">Do I still have it/know where it is?</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onEleventh} onBlur={this.onEleventhBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q12.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">When I left my old home/country, what I missed the most was…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTwelveth} onBlur={this.onTwelvethBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q13.</div>
                                                    <div className="questions-data" style={{ position: "relative", top: "-10px" }}>
                                                        <span className="input-container">
                                                            <Input placeholder="Enter Year" onChange={this.onThirteenthA} onBlur={this.onThirteenthABlur} />
                                                        </span>
                                                        <span> years later, I still miss… </span>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onThirteenthB} onBlur={this.onThirteenthBBlur} />
                                                            </Form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q14.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I wish someone had told me…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFourteenth} onBlur={this.onFourteenthBlur} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q15.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I have always wondered….</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFifteenth} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q16.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">Before I got to my new country/home, I thought it would be…..</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onSixteenth} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q17.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">When I got here, I realized it was….</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onSeventeenth} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q18.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">The best bit of advice I ever received about this journey was…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onEighteenth} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q19.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">Something amazing about the whole experience that I have never told anyone…..</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onNineteenth} />
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q20.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I hope that….</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTwentith} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q21.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">If you have just landed in a new land and are scared, know this:</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTwentyFirst} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q22.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I am grateful for….</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTwentySecond} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="questions-data-container last-question" id="first-last">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q23.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">My prayer is…</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTwentyThird} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fragment>
                                    }

                                    {location.type === "second" &&
                                        <Fragment>

                                            <div className="questions-data-container" style={{ marginTop: "20px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div>Q1.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I live in</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Enter City/Country" onChange={this.onFirst} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q2.</div>
                                                    <div className="questions-data" style={{ position: "relative", top: "-10px" }}>
                                                        <span>I am </span>
                                                        <span className="input-container">
                                                            <Input placeholder="Enter Generation" onChange={this.onSecondA} />
                                                        </span>
                                                        <span>  generation in this country. </span>

                                                    </div>
                                                </div>

                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q3.</div>
                                                    <div className="questions-data" style={{ position: "relative", top: "-10px" }}>
                                                        <span>I am </span>
                                                        <span className="input-container">
                                                            <Input placeholder="Enter your relative" onChange={this.onThirdA} />
                                                        </span>
                                                        <span>  migrated from </span>
                                                        <span className="input-container">
                                                            <Input placeholder="Enter Country/ City" onChange={this.onThirdB} />
                                                        </span>
                                                        <span> to </span>
                                                        <br />

                                                        <span>
                                                            <Input placeholder="Enter Country/ City" onChange={this.onThirdC} />
                                                        </span>
                                                        <span style={{ lineHeight: "60px" }}> in </span>
                                                        <span style={{ lineHeight: "60px" }}>
                                                            <Input placeholder="Enter Year" onChange={this.onThirdD} />
                                                        </span>

                                                    </div>
                                                </div>

                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q4.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">Growing up, our family always felt a little different because</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFourth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q5.</div>
                                                    <div className="questions-data" style={{ position: "relative", top: "-10px" }}>
                                                        <span>My </span>
                                                        <span className="input-container">
                                                            <Input placeholder="Enter your relative" onChange={this.onFifthA} />
                                                        </span>
                                                        <span>  would often </span>
                                                        <span className="input-container">
                                                            <Input placeholder="Type your words here.." onChange={this.onFifthB} />
                                                        </span>
                                                        <span style={{ lineHeight: "44px" }}> And it made me feel </span>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFifthC} />
                                                            </Form>

                                                        </div>


                                                    </div>
                                                </div>

                                            </div>



                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q6.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I have often wondered how they</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onSixth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q7.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">Now that I am older, I feel</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onSeven} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q8.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">One tradition that they kept that I loved</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onEight} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q9.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">One traditions that they kept that I did not love</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onNinth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q10.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I always wish I had asked</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTenth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q11.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I imagine they would say</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onEleventh} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q12.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">It is amazing to me that they</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onTwelveth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q13.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">It is amazing to me that they</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onThirteenth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q14.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I wish I could tell them</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFourteenth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q15.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">I am proud that</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onFifteenth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="questions-data-container last-question" id="second-last">
                                                <div style={{ display: "flex" }}>
                                                    <div>Q16.</div>
                                                    <div className="questions-data">
                                                        <div className="questions-text-data">And grateful for</div>
                                                        <div className="questions-description-data">
                                                            <Form>
                                                                <TextArea placeholder="Type words here.." onChange={this.onSixteenth} />
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fragment>
                                    }

                                    <div >
                                        <div className="record-video-container" onClick={this.onOpenDialog}>
                                            <span className="record-video-icon">
                                                <img src={VideoIcon} />
                                            </span>
                                            <span className="record-video-text"> Record your video<br /><span className="record-video-support-version">(Supported on Chrome Browser only)</span></span>
                                        </div>
                                        {/* </Link> */}

                                    </div>

                                </div>
                            </CustomScrollbar>
                        }



                    </div>
                </div>

                {this.state.isDialogOpened && <WebcamDialog onCloseDialog={this.onCloseDialog} isDialogOpened={this.state.isDialogOpened} />}
                {location && location.type === "first" && <QuestionFooter type="first" totalQuestions={firstGenerationQuestions.length} isFinishButtonVisible={isFinishButtonVisible} />}
                {location && location.type === "second" && <QuestionFooter type="second" totalQuestions={secondGenerationQuedstions.length} isFinishButtonVisible={isFinishButtonVisible} />}


            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    const question = state.FiddlerReducer.question
    let questionIds = []
    if (question && question.allIds) {
        questionIds = question.allIds || []
    }
    return {
        questionIds,
    }
}

const mapActionsToProps = {
    initQuestions,
    findQuestionById,
    populateAnswer
}


export default withRouter(connect(mapStateToProps, mapActionsToProps)(Questions))