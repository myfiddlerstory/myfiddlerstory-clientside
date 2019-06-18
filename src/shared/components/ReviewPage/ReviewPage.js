/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent } from 'react'


//import css
import './ReviewPage.css'

class ReviewPage extends PureComponent{
    render(){
        return (
            <div className="review-page-container">
                <div className="review-page-heading">Review your Form!</div>
                <div className="review-page-text-1">Thanks for sharing your story with us.  </div>
                <div className="review-page-text-2">Please review your story, before final submit</div>
                <div className="review-page-button-container">
                    <div className="review-page-button">Review</div>
                </div>
                
            </div>
        )
    }
}

export default ReviewPage