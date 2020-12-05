import React from 'react'

const Preview = ({deleteRoom, object}) => {
    return (
        <div className="ui segment">
            <div className="ui card fluid">
                <div style={{position:'relative'}}>
                    <img style={{width:520, height:290}} src={object.src} />
                    <div style={{position:'absolute',height:object.height,width:object.width, left:object.x, top:object.y, border:'2px solid red'}}></div>
                </div>
                <div className="content">
                    <div className="header">{object.id}</div>
                </div>
                <div className="content">
                    <div className="meta"><span><i className="className linkify icon"></i> {object.src}</span></div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        {object.width } x {object.height }
                    </span>
                </div>
                <div className="ui bottom attached button" onClick={()=>deleteRoom(object.id)}>
                    <i className="trash icon"></i>Delete
                </div>
            </div>
        </div>
    )
}

export default Preview