
import "./chatList.css"

export default function ChatList({onClick, active, data}) {
    return (
        <div className="chatList" onClick={onClick} id={active?"selected": ""}>
            <img src={data.avatar} alt="" />
            <div className="chatListinfos">
                <div style={{margin: 0}} className="chatListinfos-top">
                    <div>
                        <p>{data.chatTitle}</p>
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

