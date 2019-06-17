/**
 * Created By Nikita Mittal
 * 18th June 2019
 */

import React, { PureComponent } from 'react'

//import components
import CustomScrollbar from '../CustomScrollbar'

//import css
import './LandingPage.css'
class LandingPage extends PureComponent {
    render() {
        return (
            <div className="landing-page-container">
                <div style={{height: "inherit"}} >
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

                       <p>
                            Click on one of the buttons below and tell us about 
                            you and your family’s journey to this country.
                       </p>
                    </CustomScrollbar>
                    <div className="landing-page-fade-in-container"></div>
                </div>
                <div></div>
            </div>
        )
    }
}

export default LandingPage