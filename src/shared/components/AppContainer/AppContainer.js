/**
 * Created By Nikita Mittal
 * 17th June 2019
 */

import React, {PureComponent} from 'react'

//import css
import './AppContainer.css'

//import components..
import Header from '../Header'

class AppContainer extends PureComponent{
    render(){
        const {isMenuVisible} = this.props
        return (
            <div className="app-container">
            <Header isMenuVisible={isMenuVisible}></Header>
            {this.props.children}
        </div>
        )
    }
}


export default AppContainer
