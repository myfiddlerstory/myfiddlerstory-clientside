import React, {PureComponent} from 'react'



class PublicAnswers extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedTab 
        }
    }
    render(){
        return (
            <div>
                <div>
                    <div>First Generation</div>
                    <div>Second Generation</div>
                </div>
                <div></div>
            </div>
        )
    }
}


export default  PublicAnswers