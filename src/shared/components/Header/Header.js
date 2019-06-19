/**
 * Created By Nikita Mittal
 * 17th June 2019
 */


import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'

//import css
import './Header.css'

//import components
import MenuLogo from '../../icons/menu_icon.svg'
import FiddlerLogo from '../../icons/fiddler_logo.png'
import RebootLogo from '../../icons/reboot_logo.png'

class Header extends PureComponent {

    onRediectToHome = () => {
        const {history} = this.props
        // history.push("/")
    }

    
    render() {
        const { isMenuVisible, onOpenSidebar } = this.props
        let menuClassName =  "header-menu"
        
        if (!isMenuVisible) {
            menuClassName = `${menuClassName} hidden`
        }
        return (
            <div className="header-container">
                <div className={menuClassName}>
                    <div style={{ fontWeight: "bold" }}>Menu</div>
                    <img src={MenuLogo} style={{ width: "40px", cursor: "pointer" }} onClick={onOpenSidebar}/>
                </div>

                <div className="header-logo-container">

                    <div className="header-fiddler-logo-container">
                        <img src={FiddlerLogo} style={{ width: "180px" }} onClick={this.onRediectToHome}/>
                    </div>


                    <div className="header-fiddler-text-container" onClick={this.onRediectToHome}>#MyFiddlerStory</div>

                    <div className="header-reboot-logo-container">
                        <img src={RebootLogo} style={{ width: "200px", height: "50px" }} onClick={this.onRediectToHome}/>
                    </div>


                </div>
            </div>
        )
    }
}


export default withRouter(Header)