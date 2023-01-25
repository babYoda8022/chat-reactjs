
import { useState, useEffect } from "react"
import "./chatBalloon.css"

export function ChatBalloon({data, currentUser}) {

    const [time, setTime] = useState()

   useEffect(()=>{
        if(data.date > 0){
            let newDate = new Date(data.date.seconds * 1000)
            let hour = newDate.getHours()
            let min = newDate.getMinutes()
            hour = hour < 10 ? `0${hour}`: hour
            min = min < 10 ? `0${min}` : min
            setTime(`${hour}:${min}`)
        }
    },[data])


    return (
        <div className="text-balloon-line" id={currentUser.id == data.author? "sender": ""}>
            <div className="text-balloon">
                <p>{data.body}</p>
                <div className="balloon-time">
                    <p>{time}</p>
                </div>
            </div>
        </div>
    )
}



