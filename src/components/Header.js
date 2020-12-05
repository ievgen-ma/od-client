import React, { Component } from 'react'

class Header extends Component {
    renderContext(){
        return <button onClick={()=>this.props.toogleRoom()} className="ui primary button"><i className="plus circle icon"></i>Create</button>
    }
    render(){
        return (
            <div className="ui menu">
                <div className="item active">
                    Object Detection
                </div>
                <div className="item right">
                    {this.renderContext()}
                </div>
            </div>
        )
    }
}

export default Header