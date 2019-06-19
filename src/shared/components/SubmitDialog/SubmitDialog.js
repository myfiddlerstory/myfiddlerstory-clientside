/**
 * Created By Nikita Mittal
 * 19th June 2019
 */

import React, { PureComponent, Fragment } from 'react'
import { Modal, Form, Radio, Input } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//import css
import './SubmitDialog.css'

class SubmitDialog extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    handleChange = (e, { value }) => this.setState({ value })
    onCloseDialog = () => {
        const {onDialogStateChange} = this.props
        onDialogStateChange(false)
    }
    render() {
        const { isDialogOpened,  } = this.props
        let buttonStyle= {}, modalClassname = "submit-dialog-modal"
        if(this.state.value === "public"){
            buttonStyle = {
                marginTop: "30px"
            }
            modalClassname = `submit-dialog-modal-public`
        }
        return (
            <Modal open={isDialogOpened} onClose={this.onCloseDialog} className={modalClassname}>
                <div className="submit-dialog-container">
                    <div className="submit-dialog-heading-text">I would like my personal story to be  </div>
                    <div className="submit-dialog-radio-button-container">
                        <Form.Field>
                            <Radio
                                label='Shared publicly including my name.'
                                name='radioGroup'
                                value='public'
                                checked={this.state.value === 'public'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field style={{marginTop: "20px"}}>
                            <Radio
                                label='Shared Anonymously. No name.'
                                name='radioGroup'
                                value='private'
                                checked={this.state.value === 'private'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        {this.state.value === "public" && 
                            <Fragment>
                                <div style={{marginTop: "20px"}}>
                                    <Input fluid placeholder="Enter Full Name"/>
                                    <Input fluid placeholder="Enter Email" style={{marginTop: "10px"}}/>
                                </div>
                              
                                
                            </Fragment>
                    }
                    </div>
                    <Link to={"/success"}>
                        <div className="submit-dialog-button-container" style={buttonStyle}>
                            <div className="submit-dialog-button" onClick={this.onCloseDialog}>Done</div>
                        </div>
                    </Link>
                    
                </div>
            </Modal>
        )
    }
}


export default SubmitDialog