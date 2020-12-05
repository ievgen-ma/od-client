import React, {useEffect, useState} from 'react'
import Pick from './Pick'
import Preview from './Preview'
import axios from 'axios'
import Header from './Header'
import { SemanticToastContainer, toast } from 'react-semantic-toasts'
import 'react-semantic-toasts/styles/react-semantic-alert.css'

//http://73.238.140.62/mjpg/video.mjpg

const App = () => {
    const [creatForm, setCreatForm] = useState(false)
    const [rooms, setRooms] = useState([])

    const createRoom = async (url, crop) => {
        const room = {
            url,    
            width:crop.width,
            height:crop.height,
            left:crop.x,
            top:crop.y,
            roomWidth:520,
            roomHeight:290
        }
        const {data} = await axios.post(`${process.env.SERVER_API}/api/rooms`,room);
        setRooms([...rooms, data])
        setCreatForm(!creatForm)
    }

    useEffect(()=>{
        fetcRooms();
        var socket = new WebSocket(process.env.SERVER_WS);

        socket.onmessage = function (message) {
            const {data} = message
            toast(
                {
                    type: 'warning',
                    title: 'Object detected',
                    description: data,
                    time: 5000,
                }
            );
        };
    },[])

    const toogleRoom = () => {
        setCreatForm(!creatForm)
    }

    const fetcRooms = async () => {
        const {data} = await axios.get(`${process.env.SERVER_API}/api/rooms`);
        setRooms(data);
    }

    const deleteRoom = async(id) => {
        const {data} = await axios.delete(`${process.env.SERVER_API}/api/rooms/${id}`);
        const newRooms =  rooms.filter((room)=>{
            return room.id !== data.id
        })
        setRooms(newRooms);
    }

    const renderedRooms = () => {
        return rooms.map(room => {
            return <div key={room.id} className="column"><Preview deleteRoom={deleteRoom} object={{id:room.id, src:room.url, height:room.height, width:room.width, x:room.left, y:room.top}}/></div>
        })
    }

    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <Header toogleRoom={toogleRoom} />

            <div style={{display: creatForm ? 'block' :'none'}}>
                <Pick  createRoom={createRoom}/>
            </div>
    
            <div className="ui two column grid">
                {renderedRooms()}
            </div>   

            <SemanticToastContainer />       
        </div>
        
    )
}

export default App