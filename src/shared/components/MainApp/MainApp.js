/**
 * Created By Nikita Mittal
 * 16th June 2019
 */

import React, {PureComponent} from 'react'
import AppContainer from '../AppContainer';

//import css
import './MainApp.css'

//import components..
import Header from '../Header'

class MainApp extends PureComponent{
    render(){
        return (
            <div className="main-app-container">
                <AppContainer isMenuVisible={true}/>
            </div>
        )
    }
}


export default MainApp