/**
 * Created By Nikita Mittal
 * 18th June 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

class StartButton extends PureComponent {
    render() {
        return (
            <div className="start-button-container">
                <div style={{flex: "1 1 auto"}}>
                    <div className="start-button">
                        I Am A First Generation Refugee
                </div>
                </div>
                <div>
                    <div className="start-button">
                        I Am A Second Generation Refugee
                </div>
                </div>

            </div>
        )
    }
}

export default StartButton