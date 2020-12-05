import React, { useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

const Pick = ({createRoom}) => {
    const [url, setUrl] = useState('')
    const [crop, setCrop] = useState({ unit: 'px' });
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const onChange = crop => {
        console.log(crop)
        setCrop(crop);

        setWidth(crop.width)
        setHeight(crop.height)
    };
    
    return (

        <div className="ui two column grid segment">
            <div className="column">
                <ReactCrop style={{width:520, height:290}} src={url} crop={crop} onChange={newCrop => onChange(newCrop)} />                                     
            </div>
            <div className="column">
                <div className="ui card fluid">
                    <div className="content">
                        <div className="center aligned header">Picking</div>
                        <br/>
                        <div className="center aligned meta">
                            <div className="ui input labeled fluid">
                                <div className="ui label">
                                    <i className="className linkify icon"></i>
                                </div>
                                <input onChange={e=>{setUrl(e.target.value)}} value={url} type="text" placeholder="Url" />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="meta">
                            <span>Cropped image size</span>
                        </div>
                        <br/>
                        <div className="center aligned ui two column grid">
                            <div className="column">
                                <div className="ui input labeled">
                                    <div className="ui label">
                                        width:
                                    </div>
                                    <input onChange={e=>{}} value={width} type="number" placeholder="Width" />
                                </div>
                            </div>
                            
                            <div className="column">
                                <div className="ui input labeled">
                                    <div className="ui label">
                                        height:
                                    </div>
                                    <input onChange={e=>{}} value={height} type="number" placeholder="Height" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="center extra content">
                        <div className="center aligned">
                            <button onClick={()=> createRoom(url, crop)} className="ui orange button">Pick & Crop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pick