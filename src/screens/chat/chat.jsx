
import { useEffect, useState, useRef } from "react"
import { auth } from "../../service/firebase"
import { useNavigate } from "react-router-dom"

import "./chat.css"
import ChatList from "../../components/chatList/chatList"
import { ChatBalloon } from "../../components/chatBalloon/chatBalloon"


export default function Chat() {

  const body = useRef()

  const navegate = useNavigate()

  const [chatList, setChatList] = useState([
    {chatId: 1, chatTitle: "Fulano de tal", avatar: "https://www.w3schools.com/howto/img_avatar2.png"}, 
    {chatId: 2, chatTitle: "Fulano de tal", avatar: "https://www.w3schools.com/howto/img_avatar2.png"}, 
    {chatId: 3, chatTitle: "Fulano de tal", avatar: "https://www.w3schools.com/howto/img_avatar2.png"}
  ])
  
  const [user, setUser] = useState({
    id: 1234, 
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    name: "Luiz Roberto"
  })
  
  const [activeChat, setActiveChat] = useState({})
  const [text, setText] = useState([])
  
  const [messageList, setMessageList] = useState([
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaassssssssssssssss"},
    {author:1234, body:"abaaaaa"},
    {author:1234, body:"abaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaassssssssssssssss"},
    {author:1234, body:"abaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaassssssssssssssss"},
    {author:1234, body:"abaaaaa"},
    {author:1234, body:"abaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaa"},
    {author:123, body:"aaaaaassssssssssssssss"},
    {author:1234, body:"abaaaaa"},
    {author:123, body:"aaaaaa"},
  ])

  window.onbeforeunload =  auth.onAuthStateChanged(async (userCredential) => {
    // if (userCredential) {
    //   await setUser({ nome: userCredential.displayName, photoPath: userCredential.photoURL })
    // } else {
    //   navegate("/")
    // }
  })

  useEffect(()=>{
    if(body.current != undefined){
      if(body.current.scrollHeight > body.current.offsetHeight){
        body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
      }
    }
  }, [messageList, activeChat.chatId])

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
              return <ChatList 
                      key={key}
                      data={item}
                      active={activeChat.chatId == chatList[key].chatId} 
                      onClick={()=>{setActiveChat(chatList[key])}}/>
            })}

          </div>
        </div>
        <div className="chat-main">
          {
            activeChat.chatId != undefined &&
            <>
              <div className="chat-main-top">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                <div>
                  <h1>{user.nome}</h1>
                  <span>Online</span>
                </div>
              </div>
              <div className="chat-main-content">
                <div ref={body} className="chat-main-content-chat-content">
                  {messageList.map((item, key)=>{
                    return <ChatBalloon  key={key}
                                         data={item}
                                         currentUser={user}/>
                  })}
                </div>
                <div className="chat-main-content-down">
                  <div className="input-text">
                    <input  type="text"
                            placeholder="Message" 
                            value={text}
                            onChange={e=>setText(e.target.value)}/>
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

