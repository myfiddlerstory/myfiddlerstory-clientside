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
        const { history } = this.props
        // history.push("/")
    }


    render() {
        const { isMenuVisible, onOpenSidebar } = this.props
        let menuClassName = "header-menu"

        if (!isMenuVisible) {
            menuClassName = `${menuClassName} hidden`
        }
        return (
            <div className="header-container">
                <div style={{display: "flex"}}>
                    <div className={menuClassName}>
                        <div className="header-menu-text">Menu</div>
                        <img src={MenuLogo} className="header-menu-logo" style={{ cursor: "pointer" }} onClick={onOpenSidebar} />
                    </div>

                    <div className="header-logo-container">

                        <div className="header-fiddler-logo-container">
                            <img src={FiddlerLogo} className="header-fiddler-logo" onClick={this.onRediectToHome} />
                        </div>


                        <div className="header-fiddler-text-container" onClick={this.onRediectToHome}>#MyFiddlerStory</div>

                        <div className="header-reboot-logo-container">
                            <img src={RebootLogo} className="header-reboot-logo" onClick={this.onRediectToHome} />
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}


export default withRouter(Header)