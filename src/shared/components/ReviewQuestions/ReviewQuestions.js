/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, TextArea, Input } from 'semantic-ui-react'
import {connect} from 'react-redux'

//import css
import './ReviewQuestions.css'

//import components
import CustomScrollbar from '../CustomScrollbar'
import SubmitDialog from '../SubmitDialog';
import WebcamDialog from '../WebcamDialog'

class ReviewQuestions extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            isDialogOpened : false,
            isWebcamOpened : false
        }
    }

    componentDidMount = () => {
        const { location, history } = this.props
        if (!location || !location.type) {
            history.push("/")
        }

    }

    onDialogStateChange = (value) => {
        this.setState({
            isDialogOpened : value
        })
    }

    onOpenDialog = () => {
        this.onDialogStateChange(true)
    }

    onOpenWebcamDialog = () => {
        this.setState({
            isWebcamOpened: true
        })
    }

    onCloseWebcamDialog = () => {
        this.setState({
            isWebcamOpened: false
        })
    }
    render() {
        const { location,
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
         } = this.props
        const {isDialogOpened} = this.state
        return (
            <div className="review-questions-container">
                {location && location.type &&
                    <CustomScrollbar>
                        <div className="review-all-questions-container">
                            {location.type === "first" &&
                                <Fragment>
                                    {/* First Question */}
                                    <div className="review-question-data-container" style={{ marginTop: "20px" }}>
                                        <div style={{ display: "flex" }}>
                                            <div>Q1.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I was born in the year</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={firstValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Second Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q2.</div>
                                            <div className="review-question-data" style={{ position: "relative", top: "-10px" }}>
                                                <span>In </span>
                                                <span className="input-container">
                                                    <Input placeholder="Enter Year" value={secondValueA}/>
                                                </span>
                                                <span> I Left </span>
                                                <span className="input-container">
                                                    <Input placeholder="Enter Country/ City" value={secondValueB}/>
                                                </span>
                                                <span> and went to </span>
                                                <br />
                                                <span style={{lineHeight: "60px"}}>
                                                    <Input placeholder="Enter Country/ City" value={secondValueC}/>
                                                </span>

                                            </div>
                                        </div>

                                    </div>

                                    {/* Third Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q3.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I now Live in</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={thirdValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fourth Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q4.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Three words to describe what it felt like to leave the country I was born in…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fourthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fifth Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q5.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">The most surprising thing about the journey was…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fifthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sixth Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q6.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">The hardest thing about the journey was…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={sixthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Seventh Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q7.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">The scariest thing about the journey was…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={seventhValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Eigth Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q8.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">One lovely thing that I can remember about the journey was…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={eighth}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ninth Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q9.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">My most treasured possession that I brought with me was….</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={ninthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tenth Question */}
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q10.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I brought it because….</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={tenthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q11.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Do I still have it/know where it is?</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={eleventhValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q12.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">When I left my old home/country, what I missed the most was…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={twelvethValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q13.</div>
                                            <div className="review-question-data" style={{ position: "relative", top: "-10px" }}>
                                                <span className="input-container">
                                                    <Input placeholder="Enter Year" value={thirteenthValueA}/>
                                                </span>
                                                <span> years later, I still miss… </span>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={thirteenthValueB}/>
                                                    </Form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q14.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I wish someone had told me…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fourteenthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q15.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I have always wondered….</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fifteenthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q16.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Before I got to my new country/home, I thought it would be…..</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={sixteenthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q17.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">When I got here, I realized it was….</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={seventeenthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q18.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">The best bit of advice I ever received about this journey was…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={eighteenthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q19.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Something amazing about the whole experience that I have never told anyone…..</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={nineteenthValue}/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q20.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I hope that….</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={twentithValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q21.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">If you have just landed in a new land and are scared, know this:</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={twentyFirstValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q22.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I am grateful for….</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={twentySecondValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q23.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">My prayer is…</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={twentyThirdValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            }

                            {location.type === "second" &&
                                <Fragment>

                                    <div className="review-question-data-container" style={{ marginTop: "20px" }}>
                                        <div style={{ display: "flex" }}>
                                            <div>Q1.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I live in</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Enter City/Country" value={firstValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q2.</div>
                                            <div className="review-question-data" style={{ position: "relative", top: "-10px" }}>
                                                <span>I am </span>
                                                <span className="input-container">
                                                    <Input placeholder="Enter generation" value={secondValueA}/>
                                                </span>
                                                <span>  generation in this country. </span>
                                      

                                            </div>
                                        </div>

                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q3.</div>
                                            <div className="review-question-data" style={{ position: "relative", top: "-10px" }}>
                                                <span>I am </span>
                                                <span className="input-container">
                                                    <Input placeholder="Enter your relative" value={thirdValueA}/>
                                                </span>
                                                <span>  migrated from </span>
                                                <span className="input-container">
                                                    <Input placeholder="Enter Country/ City" value={thirdValueB}/>
                                                </span>
                                                <span> to </span>
                                                <br />

                                                <span>
                                                    <Input placeholder="Enter Country/ City" value={thirdValueC}/>
                                                </span>
                                                <span style={{lineHeight: "60px"}}> in </span>
                                                <span style={{lineHeight: "60px"}}>
                                                    <Input placeholder="Enter Year" value={thirdValueD}/>
                                                </span>

                                            </div>
                                        </div>

                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q4.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Growing up, our family always felt a little different because</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fourthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q5.</div>
                                            <div className="review-question-data" style={{ position: "relative", top: "-10px" }}>
                                                <span>My </span>
                                                <span className="input-container">
                                                    <Input placeholder="Enter your relative" value={fifthValueA}/>
                                                </span>
                                                <span>  would often </span>
                                                <span className="input-container">
                                                    <Input placeholder="Type your words here.." value={fifthValueB}/>
                                                </span>
                                                <span style={{ lineHeight: "44px" }}> And it made me feel </span>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fifthValueC}/>
                                                    </Form>

                                                </div>


                                            </div>
                                        </div>

                                    </div>



                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q6.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I have often wondered how they</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={sixthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q7.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Now that I am older, I feel</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={seventhValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q8.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">One tradition that they kept that I loved</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={eighth}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q9.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">One traditions that they kept that I did not love</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={ninthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q10.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I always wish I had asked</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={tenthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q11.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I imagine they would say</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={eleventhValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q12.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">It is amazing to me that they</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={twelvethValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q13.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I wish I could tell them</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={thirteenthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q14.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I am proud that</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fourteenthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q15.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">And grateful for</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={fifteenthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q16.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Here’s hoping that</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." value={sixteenthValue}/>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>







                                </Fragment>
                            }

                            {video && 
                            <div className="review-video-container">
                                 <div className="review-video" onClick={this.onOpenWebcamDialog}>Review Video</div>
                            </div>
                            }


                            <div className="review-questions-button-container">

                                <div className="review-questions-button" onClick={this.onOpenDialog}>Submit</div>


                            </div>
                        </div>
                    </CustomScrollbar>
                }
                {location && location.type && <SubmitDialog onDialogStateChange={this.onDialogStateChange} isDialogOpened={isDialogOpened} type={location.type}/>}
                <WebcamDialog onCloseDialog={this.onCloseWebcamDialog} isDialogOpened={this.state.isWebcamOpened} isReview={true} video={video}/>

            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
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
    if(questionById){
        if(questionById["0"]){
            firstValue = questionById["0"].answer.value
        }
        if(questionById["1"]){
            secondValueA = questionById["1"].answer.a
        }
        if(questionById["1"]){
            secondValueB = questionById["1"].answer.b
        }
        if(questionById["1"]){
            secondValueC = questionById["1"].answer.c
        }
        if(questionById["1"]){
            secondValueD = questionById["1"].answer.d
        }
        if(questionById["2"]){
            thirdValue = questionById["2"].answer.value
            thirdValueA = questionById["2"].answer.a
            thirdValueB = questionById["2"].answer.b
            thirdValueC = questionById["2"].answer.c
            thirdValueC = questionById["2"].answer.d
        }
        if(questionById["3"]){
            fourthValue = questionById["3"].answer.value
            fourthValueA = questionById["3"].answer.a
            fourthValueB = questionById["3"].answer.b
            fourthValueC = questionById["3"].answer.c
        }
        if(questionById["4"]){
            fifthValue = questionById["4"].answer.value
            fifthValueA = questionById["4"].answer.a
            fifthValueB = questionById["4"].answer.b
            fifthValueC = questionById["4"].answer.c
        }
        if(questionById["5"]){
            sixthValue = questionById["5"].answer.value
           
        }

        if(questionById["6"]){
            seventhValue = questionById["6"].answer.value
        }

        if(questionById["7"]){
            eighth = questionById["7"].answer.value
        }

        if(questionById["8"]){
            ninthValue = questionById["8"].answer.value
        }

        if(questionById["9"]){
            tenthValue = questionById["9"].answer.value
        }

        if(questionById["10"]){
            eleventhValue = questionById["10"].answer.value
        }
        if(questionById["11"]){
            twelvethValue = questionById["11"].answer.value
        }

        if(questionById["12"]){
            thirteenthValue = questionById["12"].answer.value
            thirteenthValueA = questionById["12"].answer.a
            thirteenthValueB = questionById["12"].answer.b
        }

        if(questionById["13"]){
            fourteenthValue = questionById["13"].answer.value
        }
        if(questionById["14"]){
            fifteenthValue = questionById["14"].answer.value
        }

        if(questionById["15"]){
            sixteenthValue = questionById["15"].answer.value
        }

        if(questionById["16"]){
            seventeenthValue = questionById["16"].answer.value
        }

        if(questionById["17"]){
            eighteenthValue = questionById["17"].answer.value
        }

        if(questionById["18"]){
            nineteenthValue = questionById["18"].answer.value
        }

        if(questionById["19"]){
            twentithValue =  questionById["19"].answer.value
        }

        if(questionById["20"]){
            twentyFirstValue =  questionById["20"].answer.value
        }

        if(questionById["21"]){
            twentySecondValue =  questionById["21"].answer.value
        }

        if(questionById["22"]){
            twentyThirdValue =  questionById["22"].answer.value
        }
        video = state.FiddlerReducer.video
        console.log("First Value", firstValue)
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


export default withRouter(connect(mapStateToProps, null)(ReviewQuestions))