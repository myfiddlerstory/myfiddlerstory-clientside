import React, { PureComponent } from 'react'
import map from 'lodash/map'

class PublicIds extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            selectedId: ""
        }
    }

    getIds = () => {
        const {idList, onFetchData} = this.props
        const {selectedId} = this.state
       return  map(idList, (id, index) => {
           const onSelect = () => {
               this.setState({
                   selectedId: id
               })
               onFetchData(id)
           }
           let style = {}
           if(id === selectedId){
               style = {
                   background: "#ddd",
                   opacity: 0.5
               }
           }
           return <div className="public-id-element" style={style} key={id} onClick={onSelect}>{id}</div>
       })
    }


    render(){
        return (
            <div className="public-ids-container">
                {this.getIds()}
            </div>
        )
    }
}


export default PublicIds