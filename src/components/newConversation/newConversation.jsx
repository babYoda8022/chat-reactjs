
import { useState } from "react"
import "./newConversation.css"

export default function NewConversation({open, func}) {

    const [conversationList, setConversationList] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ])

    return (
        <div className="newConversation" id={open? "": "close"}>
            <div className="newConversation-container">
                <div className="newConversation-top">
                    <div>
                        <button  onClick={func}>
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <h1>New Conversation</h1>
                    </div>
                    <div className="newConversation-top-search">
                        <input type="text" placeholder="Search" />
                        <button>
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <div className="newConversation-main">
                   {
                    conversationList.map((item, key)=>{
                        return <>
                            <div className="newConversation-main-list" key={key}>
                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                                <div>
                                    <h1>NOME</h1>
                                    <p>Online</p>
                                </div>
                            </div>
                        </>
                    })
                   }
                </div>
            </div>
        </div>
    )
}

