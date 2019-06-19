/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import {Form, TextArea, Input} from 'semantic-ui-react'

//import css
import './ReviewQuestions.css'

//import components
import CustomScrollbar from '../CustomScrollbar'

class ReviewQuestions extends PureComponent {

    componentDidMount = () => {
        const { location, history } = this.props
        if (!location || !location.type) {
            history.push("/")
        }

    }
    render() {
        const { location } = this.props

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
                                                        <TextArea placeholder="Type words here.." />
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
                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q3.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I now Live in</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                    <Input placeholder="Enter Year" />
                                                </span>
                                                <span> years later, I still miss… </span>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
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
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container" style={{ height: "350px" }}>
                                        <div style={{ display: "flex" }}>
                                            <div>Q23.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">My prayer is…</div>
                                                <div className="review-question-description-data">
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

                                    <div className="review-question-data-container" style={{ marginTop: "20px" }}>
                                        <div style={{ display: "flex" }}>
                                            <div>Q1.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I live in</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Enter City/Country" />
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


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q3.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Growing up, our family always felt a little different because</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q4.</div>
                                            <div className="review-question-data" style={{ position: "relative", top: "-10px" }}>
                                                <span>My </span>
                                                <span className="input-container">
                                                    <Input placeholder="Enter your relative" />
                                                </span>
                                                <span>  would often </span>
                                                <span className="input-container">
                                                    <Input placeholder="Type your words here.." />
                                                </span>
                                                <span style={{ lineHeight: "44px" }}> And it made me feel </span>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>


                                            </div>
                                        </div>

                                    </div>



                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q5.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I have often wondered how they</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q6.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Now that I am older, I feel</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q7.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">One tradition that they kept that I loved</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q8.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">One traditions that they kept that I did not love</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q9.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I always wish I had asked</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q10.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I imagine they would say</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q10.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">It is amazing to me that they</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q11.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">It is amazing to me that they</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q12.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I wish I could tell them</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q13.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">I am proud that</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="review-question-data-container">
                                        <div style={{ display: "flex" }}>
                                            <div>Q14.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">And grateful for</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-question-data-container" style={{ height: "350px" }}>
                                        <div style={{ display: "flex" }}>
                                            <div>Q15.</div>
                                            <div className="review-question-data">
                                                <div className="review-question-text-data">Here’s hoping that</div>
                                                <div className="review-question-description-data">
                                                    <Form>
                                                        <TextArea placeholder="Type words here.." />
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>







                                </Fragment>
                            }
                        </div>
                    </CustomScrollbar>
                }

            </div>
        )
    }
}


export default withRouter(ReviewQuestions)