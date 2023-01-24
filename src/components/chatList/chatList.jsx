
import { useEffect } from "react"
import { useState } from "react"
import "./chatList.css"

export default function ChatList({onClick, active, data}) {

    const [time, setTime] = useState()

    useEffect(()=>{
        if(data.lastMessageDate > 0){
            let newDate = new Date(data.lastMessageDate.seconds * 1000)
            let hour = newDate.getHours()
            let min = newDate.getMinutes()
            hour = hour < 10 ? `0${hour}`: hour
            min = min < 10 ? `0${min}` : min
            setTime(`${hour}:${min}`)
        }
    },[data])

    return (
        <div className="chatList" onClick={onClick} id={active?"selected": ""}>
            <img src={data.image} alt="" />
            <div className="chatListinfos">
                <div style={{margin: 0}} className="chatListinfos-top">
                    <div>
                        <p>{data.title}</p>
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="chatListinfos-down">
                    <p>{data.lastMessage}</p>
                </div>
            </div>
        </div>
    )
}

