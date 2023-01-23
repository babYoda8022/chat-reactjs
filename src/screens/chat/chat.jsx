
import { useEffect, useState } from "react"
import { auth } from "../../service/firebase"
import { useNavigate } from "react-router-dom"

import "./chat.css"
import ChatList from "../../components/chatList/chatList"


export default function Chat() {

  const navegate = useNavigate()

  const [user, setUser] = useState({
    nome: null,
    photoPath: null
  })

  auth.onAuthStateChanged((userCredential) => {
    if (userCredential) {
      setUser({ nome: userCredential.displayName, photoPath: userCredential.photoURL })
    } else {
      navegate("/")
    }
  })
  return (
    <div className="chat">
      <div className="chat-content">
        <div className="navbar">
          ....
        </div>
        <div className="sidbar">
          <div className="sidbar-top">
            <h1>Messages</h1>
            <span>(23)</span>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button>
              <i class="bi bi-search"></i>
            </button>
          </div>
          <div className="chat-content-chatList">
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
            <ChatList></ChatList>
          </div>
        </div>
        <div className="chat-main">
          <div className="chat-main-top">
            <img src={user.photoPath} alt="" />
            <div>
              <h1>{user.nome}</h1>
              <span>Online</span>
            </div>
          </div>
          <div className="chat-main-content">
            <div className="chat-main-content-chat-content">
            </div>
            <div className="chat-main-content-down">
              <div className="input-text">
                <input type="text" name="" id="" placeholder="Message"/>
              </div>
              <button>
                <i class="bi bi-send"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

