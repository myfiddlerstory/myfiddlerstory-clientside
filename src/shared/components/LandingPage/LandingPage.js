/**
 * Created By Nikita Mittal
 * 18th June 2019
 */

import React, { PureComponent } from 'react'


//import css
import './LandingPage.css'

//import components
import CustomScrollbar from '../CustomScrollbar'
import StartButton from './StartButton';
import Navigator from '../Navigator'
import AppContainer from '../AppContainer'


class LandingPage extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
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
        const {visible} = this.state
        return (
            <Navigator visible={visible} onCloseSidebar={this.onCloseSidebar}>
                <AppContainer isMenuVisible={true} onOpenSidebar={this.onOpenSidebar}>
                    <div >
                        <div className="landing-page-container">
                            <CustomScrollbar>
                                <p>
                                    We are a nation of immigrants and refugees. Our
                                    American story is composed of the experiences of
                                    those fleeing persecution, finding refuge, and
                                    building a new life and home from nothing.
                       </p>
                                <p>
                                    Our diversity IS what makes us great.
                       </p>
                                <p>
                                    Beginning this year on World Refugee Day, the
                                    producers of Fiddler on the Roof in Yiddish have
                                    created this platform for first and second
                                    generation refugees to share their stories.
                       </p>
                                <p>
                                    The Fiddler story takes place over 100 years ago,
                                    but the themes couldn’t be more relevant to
                                    today.
                       </p>
                                <p>
                                    Regardless of our background or country of origin,
                                    we all have a “Fiddler Story”. We’d love to hear yours.
                       </p>

                                <p style={{marginBottom: "70px"}}>
                                    Click on one of the buttons below and tell us about
                                    you and your family’s journey to this country.
                       </p>
                            </CustomScrollbar>
                            <div className="landing-page-fade-in-container"></div>
                        </div>
                        <div>
                            <StartButton />
                        </div>
                    </div>
                </AppContainer>

            </Navigator>

        )
    }
}

export default LandingPage