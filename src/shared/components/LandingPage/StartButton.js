/**
 * Created By Nikita Mittal
 * 18th June 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom'

class StartButton extends PureComponent {

    onOpenQuestions = () => {
        const {history} = this.props
        history.push("/questions")
    }
    render() {
        
        return (
            <div className="start-button-container">
                <div style={{ flex: "1 1 auto" }}>
                <Link to={{
                            pathname: "/questions",
                            type: "first",
                        }}>
                             <div className="start-button">
                                I Am A First Generation Refugee
                            </div>
                        </Link>
                       
                </div>
                <div>
                <Link to={{
                            pathname: "/questions",
                            type: "second",
                        }}>
                             <div className="start-button">
                                I Am The Descendant of Refugees
                            </div>
                        </Link>
                        

                </div>

            </div>
        )
    }
}

export default withRouter(StartButton)