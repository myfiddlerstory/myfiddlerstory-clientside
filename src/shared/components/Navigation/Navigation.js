/**
 * Created By Nikita Mittal
 * 24th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


//import css
import './Navigation.css'

//import icons
import CloseIcon from '../../icons/close_icon.svg'
import AboutIcon from '../../icons/about_icon.svg'
import QuestionsIcon from '../../icons/questions_icon.svg'
import PublicAnswersIcon from '../../icons/public-answers_icon.svg'
import NewsIcon from '../../icons/news_icon.svg'
import partnerIcon from '../../icons/partner_icon.svg'




class Navigation extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
    }




    render() {
        const { onClose } = this.props
        return (
            <div className="navigation-container">
                <div className="navigation-close-container" onClick={onClose}>
                    <img src={CloseIcon} style={{ width: "25px" }} />
                </div>
                <div className="navigation-element-container">
                    <Link to={"/about"}>
                        <div className="navigation-element">
                            <span>
                                <img src={AboutIcon} className="navigation-element-icon" />
                            </span>
                            <span className="navigation-element-text">
                                About
                    </span>
                        </div>
                    </Link>

                    <Link to={"/"}>

                        <div className="navigation-element">
                            <span>
                                <img src={QuestionsIcon} className="navigation-element-icon" />
                            </span>
                            <span className="navigation-element-text">
                                The Questions
                    </span>
                        </div>
                    </Link>
                    <Link to={"/public-answers"}>
                        <div className="navigation-element">
                            <span>
                                <img src={PublicAnswersIcon} className="navigation-element-icon" />
                            </span>
                            <span className="navigation-element-text">
                                Public Answers
                        </span>
                        </div>
                    </Link>
                    <Link to={"/news"}>
                        <div className="navigation-element">
                            <span>
                                <img src={NewsIcon} className="navigation-element-icon" />
                            </span>
                            <span className="navigation-element-text">
                                News
                    </span>
                        </div>
                    </Link>

                    <Link to={"/partners"}>

                        <div className="navigation-element">
                            <span>
                                <img src={partnerIcon} className="navigation-element-icon" />
                            </span>
                            <span className="navigation-element-text">
                                Partners
                        </span>
                        </div>
                    </Link>

                </div>
            </div>
        )
    }
}



export default connect(null, null)(Navigation)