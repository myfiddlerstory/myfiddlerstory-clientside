/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'


class QuestionFooter extends PureComponent{

    static propTypes = {

    }

    static defaultProps = {
        answeredQuestions : 0
    }

    isScrolledIntoView = () => {
        const {type} = this.props
        let el;
        if(type === "first"){
             el = document.getElementById("first-last")
        }else{
            el = document.getElementById("second-last")
        }
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        return isVisible;
    }


    render(){
        const {answeredQuestions, totalQuestions, isFinishButtonVisible, type} = this.props
        return (
            <div className="question-footer-container">
                <div className="question-footer-text">{answeredQuestions} of {totalQuestions} answered</div>
                {isFinishButtonVisible && 
                <div className="question-footer-conatiner" style={{marginRight: "20px"}}>
                    <Link to={{
                        pathname: "/review",
                        type: type
                    }}>
                        <div className="question-footer" >Finish</div>
                    </Link>
                   
                </div>
                }
            </div>
        )
    }
}


export default QuestionFooter