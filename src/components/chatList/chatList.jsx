
import "./chatList.css"

export default function ChatList({onClick}) {
    return (
        <div className="chatList" onClick={onClick}>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatListinfos">
                <div style={{margin: 0}} className="chatListinfos-top">
                    <div>
                        <p>Luiz Roberto</p>
                    </div>
                    <div>
                        <p>09:51</p>
                    </div>
                </div>
                <div className="chatListinfos-down">
                    <p>Oii, tudo bem? Como estás?</p>
                </div>
            </div>
        </div>
    )
}

