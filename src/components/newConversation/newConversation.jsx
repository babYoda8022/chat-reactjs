
import { useEffect } from "react"
import { useState } from "react"
import "./newConversation.css"

export default function NewConversation({open, func, conversation}) {

    useEffect(()=>{console.log(conversation)},[])

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
                    conversation.map((item, key)=>{
                        return <>
                            <div className="newConversation-main-list" key={key}>
                                <img src={item.avatar} alt="" />
                                <div>
                                    <h1>{item.name}</h1>
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

