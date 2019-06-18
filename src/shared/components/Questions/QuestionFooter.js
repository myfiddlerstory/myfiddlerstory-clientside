/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent } from 'react'


class QuestionFooter extends PureComponent{

    static propTypes = {

    }

    static defaultProps = {
        answeredQuestions : 0
    }


    render(){
        const {answeredQuestions, totalQuestions} = this.props
        return (
            <div className="question-footer-container">
                <div className="question-footer-text">{answeredQuestions} of {totalQuestions} answered</div>
            </div>
        )
    }
}


export default QuestionFooter