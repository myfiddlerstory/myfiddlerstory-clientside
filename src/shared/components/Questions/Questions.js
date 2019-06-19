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
import { initQuestions, findQuestionById } from '../../reducers/Questions/action'
import WebcamDialog from '../WebcamDialog/WebcamDialog';

class Questions extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            isDialogOpened : false
        }
    }

    changeDialogState = (value) => {
        this.setState({
            isDialogOpened: value
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

    render() {
        const { location } = this.props
        return (
            <Fragment>
                <div className="questions-container">

                    {location && location.type &&
                        <CustomScrollbar>
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                        <Input placeholder="Enter Year" />
                                                    </span>
                                                    <span> I Left </span>
                                                    <span className="input-container">
                                                        <Input placeholder="Enter Country/ City" />
                                                    </span>
                                                    <span> and went to </span>
                                                    <br />
                                                    <span>
                                                        <Input placeholder="Enter Country/ City" />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                        <Input placeholder="Enter Year" />
                                                    </span>
                                                    <span> years later, I still miss… </span>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="questions-data-container" style={{ height: "350px" }}>
                                            <div style={{ display: "flex" }}>
                                                <div>Q23.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">My prayer is…</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
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
                                                            <TextArea placeholder="Enter City/Country" />
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
                                                        <Input placeholder="Enter your relative" />
                                                    </span>
                                                    <span>  migrated from </span>
                                                    <span className="input-container">
                                                        <Input placeholder="Enter Country/ City" />
                                                    </span>
                                                    <span> to </span>
                                                    <br />

                                                    <span>
                                                        <Input placeholder="Enter Country/ City" />
                                                    </span>
                                                    <span> in </span>
                                                    <span>
                                                        <Input placeholder="Enter Year" />
                                                    </span>

                                                </div>
                                            </div>

                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q3.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">Growing up, our family always felt a little different because</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q4.</div>
                                                <div className="questions-data" style={{ position: "relative", top: "-10px" }}>
                                                    <span>My </span>
                                                    <span className="input-container">
                                                        <Input placeholder="Enter your relative" />
                                                    </span>
                                                    <span>  would often </span>
                                                    <span className="input-container">
                                                        <Input placeholder="Type your words here.." />
                                                    </span>
                                                    <span style={{ lineHeight: "44px" }}> And it made me feel </span>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>


                                                </div>
                                            </div>

                                        </div>



                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q5.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">I have often wondered how they</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q6.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">Now that I am older, I feel</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q7.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">One tradition that they kept that I loved</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q8.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">One traditions that they kept that I did not love</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q9.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">I always wish I had asked</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q10.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">I imagine they would say</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q10.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">It is amazing to me that they</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q11.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">It is amazing to me that they</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q12.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">I wish I could tell them</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q13.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">I am proud that</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="questions-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q14.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">And grateful for</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="questions-data-container" style={{ height: "350px" }}>
                                            <div style={{ display: "flex" }}>
                                                <div>Q15.</div>
                                                <div className="questions-data">
                                                    <div className="questions-text-data">Here’s hoping that</div>
                                                    <div className="questions-description-data">
                                                        <Form>
                                                            <TextArea placeholder="Type words here.." />
                                                        </Form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>







                                    </Fragment>
                                }

                                <div >
                                    {/* <Link to={{
                                        pathname: "/review",
                                        type: location.type
                                    }}> */}
                                        <div className="record-video-container" onClick={this.onOpenDialog}>
                                            <span className="record-video-icon">
                                                <img src={VideoIcon} />
                                            </span>
                                            <span className="record-video-text"> Record your video</span>
                                        </div>
                                    {/* </Link> */}

                                </div>

                            </div>
                        </CustomScrollbar>
                    }



                </div>
                {this.state.isDialogOpened && <WebcamDialog onCloseDialog={this.onCloseDialog} isDialogOpened={this.state.isDialogOpened}/>}
                {location && location.type === "first" && <QuestionFooter totalQuestions={firstGenerationQuestions.length} />}
                {location && location.type === "second" && <QuestionFooter totalQuestions={secondGenerationQuedstions.length} />}
               

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
        questionIds
    }
}

const mapActionsToProps = {
    initQuestions,
    findQuestionById
}


export default withRouter(connect(mapStateToProps, mapActionsToProps)(Questions))