/**
 * Created By Nikita Mittal
 * 17th June 2019
 */


import React, {PureComponent} from 'react'

//import css
import './Header.css'

//import components
import MenuLogo from '../../icons/menu_icon.svg'
import FiddlerLogo from '../../icons/fiddler_logo.png'
import RebootLogo from '../../icons/reboot_logo.png'

class Header extends PureComponent{
    render(){
        const {isMenuVisible} = this.props
        let menuStyle = {}
        if(!isMenuVisible){
            menuStyle = {
                visiblity : "hidden"
            }
        }
        return (
            <div className="header-container">
                <div style={menuStyle}>
                    <div style={{fontWeight: "bold"}}>Menu</div>
                    <img src={MenuLogo} style={{width : "40px", cursor: "pointer"}}/>
                </div>
               
                <div className="header-logo-container">
                    <div className="header-fiddler-logo-container">
                        <img src={FiddlerLogo} style={{width: "180px"}}/>
                    </div>
                    
                    <div className="header-fiddler-text-container">#MyFiddlerStory</div>
                    <div className="header-reboot-logo-container">
                        <img src={RebootLogo} style={{width: "200px", height: "50px"}}/>
                    </div>
                   
                </div>
            </div>
        )
    }
}


export default Header