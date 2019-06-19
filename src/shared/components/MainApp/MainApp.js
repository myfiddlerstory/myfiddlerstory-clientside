/**
 * Created By Nikita Mittal
 * 16th June 2019
 */

import React, { PureComponent } from 'react'

import { Switch, Route } from 'react-router-dom'


//import css
import './MainApp.css'

//import components..
import LandingPage from '../LandingPage'
import AppContainer from '../AppContainer';
import Questions from '../Questions';
import ReviewPage from '../ReviewPage'
import CompletePage from '../CompletePage'
import ReviewQuestions from '../ReviewQuestions'
import Webcam from '../Webcam'

function MainApp(props) {
    // render() {
    console.log("Router Changed")
    return (
        <div className="main-app-container">
            <Switch>
                <Route exact path="/" render={routerProps => (
                    // <Webcam/>
         
                        <LandingPage {...routerProps} />

                )} />
                <Route path={"/questions"} render={routerProps => (
                    <AppContainer isMenuVisible={false} {...routerProps}>
                        <Questions {...routerProps} />
                    </AppContainer>
                )} />
                <Route path={"/review"} render={routerProps => (
                    <AppContainer isMenuVisible={false} {...routerProps}>
                        <ReviewPage {...routerProps} />
                    </AppContainer>
                )} />
                <Route path={"/review-questions"} render={routerProps => (
                    <AppContainer isMenuVisible={false} {...routerProps}>
                        <ReviewQuestions {...routerProps} />
                    </AppContainer>
                )} />

                <Route path={"/success"} render={routerProps => (
                    <AppContainer isMenuVisible={false} {...routerProps}>
                        <CompletePage {...routerProps} />
                    </AppContainer>
                )} />
            </Switch>

        </div>
    )
    // }
}


export default MainApp
