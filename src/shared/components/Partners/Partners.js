import React, { PureComponent } from 'react'

//import css
import '../CompletePage/CompletePage.css'

//import components
import CustomScrollbar from '../CustomScrollbar'
import Navigator from '../Navigator'
import AppContainer from '../AppContainer'


class Partners extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
           
            visible : false,
          
        }
    }

    onOpenSidebar = () => {
        this.setState({
            visible: true
        })
    }

    onCloseSidebar = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <Navigator visible={this.state.visible} onCloseSidebar={this.onCloseSidebar}>
            <AppContainer isMenuVisible={true} onOpenSidebar={this.onOpenSidebar}>
            <div className="complete-page-container">
            <div className="complete-page-heading">Partners</div>
                <CustomScrollbar>
                    <ul>
                        <li style={{lineHeight: "60px"}}>Reboot</li>
                        <li style={{lineHeight: "60px"}}>WIRD</li>
                        <li style={{lineHeight: "60px"}}>Ars Nova</li>
                        <li style={{lineHeight: "60px"}}>Silver Screen Studios</li>
                        <li style={{lineHeight: "60px"}}>American Friends Service Committee — Immigrant Rights Program</li>
                        <li style={{lineHeight: "60px"}}>Amnesty International USA</li>
                        <li style={{lineHeight: "60px"}}>CAMBA</li>
                        <li style={{lineHeight: "60px"}}>Catholic Charities</li>
                        <li style={{lineHeight: "60px"}}>Chhaya Community Development Corporation</li>
                        <li style={{lineHeight: "60px"}}>CWS Global</li>
                        <li style={{lineHeight: "60px"}}>Dominicanos USA</li>
                        <li style={{lineHeight: "60px"}}>HIAS</li>
                        <li style={{lineHeight: "60px"}}>Immigration Equality</li>
                        <li style={{lineHeight: "60px"}}>International Rescue Committee (IRC)</li>
                        <li style={{lineHeight: "60px"}}>Met Council</li>
                        <li style={{lineHeight: "60px"}}>Migrante NJ</li>
                        <li style={{lineHeight: "60px"}}>The Miranda Family</li>
                        <li style={{lineHeight: "60px"}}>Multi-Faith Alliance</li>
                        <li style={{lineHeight: "60px"}}>Museum of Jewish Heritage</li>
                        <li style={{lineHeight: "60px"}}>New Sanctuary Coalition</li>
                        <li style={{lineHeight: "60px"}}>New York Immigration Coalition</li>
                        <li style={{lineHeight: "60px"}}>New York Legal Assistance Group (NYLAG)</li>
                        <li style={{lineHeight: "60px"}}>RDJ Refugee Shelter</li>
                        <li style={{lineHeight: "60px"}}>RIF Asylum Support</li>
                        <li style={{lineHeight: "60px"}}>UNHCR</li>
                        <li style={{lineHeight: "60px"}}>Venezuelans and Immigrants Aid (VIA)</li>
                        <li style={{lineHeight: "60px"}}>Nicola Berhman</li>
    
                    </ul>


                </CustomScrollbar>
                <div className="complete-page-fade-in-container"></div>
            </div>
            </AppContainer>
        </Navigator>
        )
    }
}


export default Partners