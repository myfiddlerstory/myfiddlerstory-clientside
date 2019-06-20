import React, { PureComponent, Fragment } from 'react'
import isEmpty from 'lodash/isEmpty'

//import components
import CustomScrollbar from '../CustomScrollbar'
class Answers extends PureComponent {

    render() {
        const { type, answerData } = this.props
        let Anonymous = true, name = "Anonymous"
        if (answerData) {
            Anonymous = answerData.Anonymous
            if (!Anonymous) {
                if (answerData.FullName) {
                    name = answerData.FullName
                } else {
                    name = answerData.EmailAddress
                }
            } else {
                name = "Anonymous"
            }
        }


        return (
            <div style={{flex: "1 1 auto"}}>
                {answerData && !isEmpty(answerData) && 
                    <div className="answers-container">
                        <div className="answer-name-container" >{name}</div>
                        <div className="answers-all-data-container"   style={{flex: "1 1 auto",marginTop:"20px"}}>
                        <CustomScrollbar>
                            <div className="answers-all-questions-container">
                                {type === "first" &&
                                    <Fragment>
                                        {/* First Question */}
                                        <div className="answers-question-data-container" style={{ marginTop: "20px" }}>
                                            <div style={{ display: "flex" }}>
                                                <div>Q1.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I was born in the year</div>
                                                    <div className="answers-question-description-data">
                                                       {answerData.question1_blank1}
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Second Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q2.</div>
                                                <div className="answers-question-data" style={{ position: "relative", top: "-10px" }}>
                                                    <span>In </span>
                                                    <span className="input-container">
                                                    {answerData.question2_blank1}
                                                    </span>
                                                    <span> I Left </span>
                                                    <span className="input-container">
                                                    {answerData.question2_blank2}
                                                    </span>
                                                    <span> and went to </span>
                                                    <br />
                                                    <span style={{lineHeight: "60px"}}>
                                                    {answerData.question2_blank3}
                                                    </span>

                                                </div>
                                            </div>

                                        </div>

                                        {/* Third Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q3.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I now Live in</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question3_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Fourth Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q4.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">Three words to describe what it felt like to leave the country I was born in…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question4_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Fifth Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q5.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">The most surprising thing about the journey was…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question5_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sixth Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q6.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">The hardest thing about the journey was…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question6_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Seventh Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q7.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">The scariest thing about the journey was…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question7_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Eigth Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q8.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">One lovely thing that I can remember about the journey was…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question8_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Ninth Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q9.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">My most treasured possession that I brought with me was….</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question9_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tenth Question */}
                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q10.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I brought it because….</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question10_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q11.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">Do I still have it/know where it is?</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question11_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q12.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">When I left my old home/country, what I missed the most was…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question12_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q13.</div>
                                                <div className="answers-question-data" style={{ position: "relative", top: "-10px" }}>
                                                    <span className="input-container">
                                                    {answerData.question13_blank1}
                                                    </span>
                                                    <span> years later, I still miss… </span>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question13_blank2}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q14.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I wish someone had told me…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question14_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q15.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I have always wondered….</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question15_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q16.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">Before I got to my new country/home, I thought it would be…..</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question16_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q17.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">When I got here, I realized it was….</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question17_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q18.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">The best bit of advice I ever received about this journey was…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question18_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q19.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">Something amazing about the whole experience that I have never told anyone…..</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question19_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q20.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I hope that….</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question20_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q21.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">If you have just landed in a new land and are scared, know this:</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question21_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q22.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I am grateful for….</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question22_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q23.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">My prayer is…</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question23_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                }

                                {type === "second" &&
                                    <Fragment>

                                        <div className="answers-question-data-container" style={{ marginTop: "20px" }}>
                                            <div style={{ display: "flex" }}>
                                                <div>Q1.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I live in</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question1_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q2.</div>
                                                <div className="answers-question-data" style={{ position: "relative", top: "-10px" }}>
                                                    <span>I am </span>
                                                    <span className="input-container">
                                                    {answerData.question2_blank1}
                                                    </span>
                                                    <span>  generation in this country. </span>


                                                </div>
                                            </div>

                                        </div>

                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q3.</div>
                                                <div className="answers-question-data" style={{ position: "relative", top: "-10px" }}>
                                                    <span>I am </span>
                                                    <span className="input-container">
                                                    {answerData.question3_blank1}
                                                    </span>
                                                    <span>  migrated from </span>
                                                    <span className="input-container">
                                                    {answerData.question3_blank2}
                                                    </span>
                                                    <span> to </span>
                                                    <br />

                                                    <span>
                                                    {answerData.question3_blank3}
                                                    </span>
                                                    <span style={{lineHeight: "60px"}}> in </span>
                                                    <span style={{lineHeight: "60px"}}>
                                                    {answerData.question3_blank4}
                                                    </span>

                                                </div>
                                            </div>

                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q4.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">Growing up, our family always felt a little different because</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question4_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q5.</div>
                                                <div className="answers-question-data" style={{ position: "relative", top: "-10px" }}>
                                                    <span>My </span>
                                                    <span className="input-container">
                                                    {answerData.question5_blank1}
                                                    </span>
                                                    <span>  would often </span>
                                                    <span className="input-container">
                                                    {answerData.question5_blank2}
                                                    </span>
                                                    <span style={{ lineHeight: "44px" }}> And it made me feel </span>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question5_blank3}

                                                    </div>


                                                </div>
                                            </div>

                                        </div>



                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q6.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I have often wondered how they</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question6_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q7.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">Now that I am older, I feel</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question7_blank1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q8.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">One tradition that they kept that I loved</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question8_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q9.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">One traditions that they kept that I did not love</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question9_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q10.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I always wish I had asked</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question10_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q11.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I imagine they would say</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question11_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q12.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">It is amazing to me that they</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question12_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q13.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I wish I could tell them</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question13_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q14.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">I am proud that</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question14_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q15.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">And grateful for</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question15_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="answers-question-data-container">
                                            <div style={{ display: "flex" }}>
                                                <div>Q16.</div>
                                                <div className="answers-question-data">
                                                    <div className="answers-question-text-data">Here’s hoping that</div>
                                                    <div className="answers-question-description-data">
                                                    {answerData.question16_blank1}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>







                                    </Fragment>
                                }

                                {/* {answerData.link &&
                                    <div className="answers-video-container">
                                        <div className="review-video" onClick={this.onOpenWebcamDialog}>Review Video</div>
                                    </div>
                                }


                                <div className="review-questions-button-container">

                                    <div className="review-questions-button" onClick={this.onOpenDialog}>Submit</div>


                                </div> */}
                            </div>
                        </CustomScrollbar>
                        </div>
                       
                    </div>}

            </div>
        )
    }
}


export default Answers