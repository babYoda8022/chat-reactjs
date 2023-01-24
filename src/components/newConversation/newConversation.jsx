import firebase from "firebase/compat/app";

import { useState, useEffect } from "react"
import { auth, db } from "../../service/firebase"
import "./newConversation.css"

export default function NewConversation({open, func, conversation}) {

     async function addNewChat(user1, user2){
         let newChat = await db.collection("chats").add({
             messages:[],
             users:[user1.uid, user2.id]
         })

         db.collection("users").doc(user1.uid).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user2.name,
                image: user2.avatar,
                with: user2.id
            })
         })

         db.collection("users").doc(user2.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user1.displayName,
                image: user1.photoURL,
                with: user1.uid
            })
         })

     }

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
                            <div className="newConversation-main-list" key={key}
                                                                       onClick={async ()=>{await addNewChat(auth.currentUser, item), func}}>
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

