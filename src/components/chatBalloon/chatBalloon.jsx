
import "./chatBalloon.css"

export function ChatBalloon({data, currentUser}) {
    return (
        
        <div className="text-balloon-line" id={currentUser.id == data.author? "sender": ""}>
            <div className="text-balloon">
                <p>{data.body}</p>
                <div className="balloon-time">
                    <p>12:00</p>
                </div>
            </div>
        </div>
    )
}



