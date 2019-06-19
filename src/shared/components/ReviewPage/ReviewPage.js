/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent } from 'react'
import {withRouter, Link} from 'react-router-dom'
//import css
import './ReviewPage.css'

class ReviewPage extends PureComponent{
    componentDidMount(){
        const {location, history} = this.props
        if(!location || !location.type){
            history.push("/")
        }
    }
    render(){
        const {location} = this.props
        let type
        if(location && location.type){
            type  = location.type
        }
        return (
            <div className="review-page-container">
                <div className="review-page-heading">Review your Form!</div>
                <div className="review-page-text-1">Thanks for sharing your story with us.  </div>
                <div className="review-page-text-2">Please review your story, before final submit</div>
                <div className="review-page-button-container">
                    <Link to={{
                        pathname : "/review-questions",
                        type : type
                    }}>
                     <div className="review-page-button">Review</div>
                    </Link>
                   
                </div>
                
            </div>
        )
    }
}

export default withRouter(ReviewPage)