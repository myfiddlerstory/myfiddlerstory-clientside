/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'

//import css
import './CompletePage.css'

//import components
import CustomScrollbar from '../CustomScrollbar'


class CompletePage extends PureComponent {
    componentDidMount(){
        const {history, location} = this.props
        if(location){
            if(!location.type){
                history.push("/")
            }
        } else{
            history.push("/")
        }
    }
    render() {
        return (
            <div className="complete-page-container">
            <div className="complete-page-heading">You Are Complete!</div>
                <CustomScrollbar>
                    <p>
                        Thank you for filling this in and going on this journey of memories with us.
               </p>
                    <p>
                        Even if no one else ever sees it, or if you simply share and discuss the details
         with your family, we are so grateful that you took this time to reflect. So many
         stories and so many journeys go unwitnessed simply because we don’t know
         the right questions to ask.
         
               </p>
                    <p>
                    We hope you’ll keep the discussion going, and share these questions with those 
that you love.

               </p>
                    <p>
                    And look out for a coincidence or two relating to this subject matter in the next 
few days. It’s funny how when we mine our stories, a couple of lovely coincidences 
always seem to transpire. If that’s the case, let us know.
               </p>
                    <p>
                    We’d love to hear!
               </p>

                </CustomScrollbar>
                <div className="complete-page-fade-in-container"></div>
            </div>
        )
    }
}


export default withRouter(CompletePage) 