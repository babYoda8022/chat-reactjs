
import "./chatBalloon.css"

export function ChatBalloonReciver(props) {
    return (
        <div className="text-balloon-receiver">
            <p>{props.txt}</p>
            <div className="balloon-time">
                <p>12:00</p>
            </div>
        </div>
    )
}

export function ChatBalloonSender(props) {
    return (
        <div className="text-balloon-receiver" id="sender">
            <p>{props.txt}</p>
            <div className="balloon-time">
                <p>12:00</p>
            </div>
        </div>
    )
}



