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
        const {isMenuVisible, onOpenSidebar} = this.props
        return (
            <div className="app-container">
            <Header isMenuVisible={isMenuVisible} onOpenSidebar={onOpenSidebar}></Header>
            {this.props.children}
        </div>
        )
    }
}


export default AppContainer
