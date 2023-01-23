
import { useEffect, useState } from "react"
import { auth } from "../../service/firebase"
import { useNavigate } from "react-router-dom"

import "./chat.css"
import ChatList from "../../components/chatList/chatList"
import { ChatBalloonReciver, ChatBalloonSender } from "../../components/chatBalloon/chatBalloon"


export default function Chat() {

  const navegate = useNavigate()
  const [chatList, setChatList] = useState([{chatId: 1}])
  const [activeChat, setActiveChat] = useState({})


  const [user, setUser] = useState({
    nome: "Luiz Roberto",
    photoPath: "https://www.w3schools.com/howto/img_avatar2.png"
  })

  auth.onAuthStateChanged((userCredential) => {
    if (userCredential) {
      //setUser({ nome: userCredential.displayName, photoPath: userCredential.photoURL })
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
            {chatList.map((item, key) => {
              return <ChatList key={key} onClick={()=>{setActiveChat(chatList[key])}}/>
            })}

          </div>
        </div>
        <div className="chat-main">
          {
            activeChat.chatId != undefined &&
            <>
              <div className="chat-main-top">
                <img src={user.photoPath} alt="" />
                <div>
                  <h1>{user.nome}</h1>
                  <span>Online</span>
                </div>
              </div>
              <div className="chat-main-content">
                <div className="chat-main-content-chat-content">
                  <ChatBalloonReciver txt="OPA" />
                  <ChatBalloonSender txt="OPA" />
                </div>
                <div className="chat-main-content-down">
                  <div className="input-text">
                    <input type="text" name="" id="" placeholder="Message" />
                    <i class="bi bi-emoji-laughing"></i>
                  </div>
                  <button>
                    <i class="bi bi-send"></i>
                  </button>
                </div>
              </div>
            </>
          }
          {
            activeChat.chatId == undefined &&
            <>
              <div className="chatHomePage">
                <h1>Welcome!!</h1>
                <p>This is my chat app, select a conversation and start talking</p>
                <i class="bi bi-send-check"></i>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

