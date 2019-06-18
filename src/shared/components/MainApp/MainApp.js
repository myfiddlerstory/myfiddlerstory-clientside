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

function MainApp(props){
    // render() {
        console.log("Router Changed")
        return (
            <div className="main-app-container">
                <Switch>
                    <Route exact path="/" render={routerProps => (
                        <AppContainer isMenuVisible={true} {...routerProps}>
                            <LandingPage {...routerProps}/>
                        </AppContainer>
                    )} />
                    <Route path={"/questions"} render={routerProps => (
                         <AppContainer isMenuVisible={false} {...routerProps}>
                            <Questions {...routerProps}/>
                        </AppContainer>
                    )}/>
                </Switch>

            </div>
        )
    // }
}


export default MainApp
