import firebase from "firebase/compat/app";

import { useEffect, useState, useRef } from "react"
import { auth, db } from "../../service/firebase"

import "./chat.css"
import ChatList from "../../components/chatList/chatList"
import { ChatBalloon } from "../../components/chatBalloon/chatBalloon"
import NewConversation from "../../components/newConversation/newConversation"


export default function Chat({setLogin}) {

  const body = useRef()

  const [chatList, setChatList] = useState([])
  const [newChatList, setNewChatList] = useState([])

  const [user, setUser] = useState({})

  const [activeChat, setActiveChat] = useState({})
  const [text, setText] = useState([])
  const [messageList, setMessageList] = useState([])
  const [chatUsers, setChatUsers] = useState([])

  const [openNewConversation, setOpenNewConversation] = useState(false)

  function OpenNewConversation() {
    if (openNewConversation) {
      setOpenNewConversation(false)
    } else {
      setOpenNewConversation(true)
    }
  }

  function logout() {
    auth.signOut().then(() => {
      setLogin(false)
    })
  }
  useEffect(() => {
    if (auth.currentUser) {
      setCurrentUser()
      getListContact()
      onChatList()
    } else {
      setLogin(false)
    }
  }, [])

  useEffect(()=>{
     chatContent()
  },[activeChat.chatId])

  useEffect(() => {
    if (body.current != undefined) {
      if (body.current.scrollHeight > body.current.offsetHeight) {
        body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
      }
    }
  }, [messageList, activeChat.chatId])

  function onChatList(){
    db.collection("users").doc(auth.currentUser.uid).onSnapshot((doc)=>{
      if(doc.exists){
        let data = doc.data()
        if(data.chats){
          setChatList(data.chats)
        }
      }
    })
  }

  async function getListContact() {
    let list = []
    let results = await db.collection("users").get()
    results.forEach(result => {
      let data = result.data()
      if (result.id != auth.currentUser.uid) {
        list.push({
          id: result.id,
          name: data.name,
          avatar: data.avatar
        })
      }
    })
    setNewChatList(list)
  }

  function setCurrentUser(){
    db.collection("users").doc(auth.currentUser.uid).set({
      name: auth.currentUser.displayName,
      avatar: auth.currentUser.photoURL
    }, { merge: true })
    let newUser = {
      id: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      avatar: auth.currentUser.photoURL
    }
    setUser(newUser)
  }

  function chatContent(){
    db.collection("chats").doc(activeChat.chatId).onSnapshot((doc)=>{
      if(doc.exists){
        let data = doc.data()
        setMessageList(data.messages)
        setChatUsers(data.users)
      }
    })
  }

  function keyPressEnter(e){
    if(e.keyCode === 13){
      sendMessage()
    }
  }

  async function sendMessage(){
    if(text != ""){
      let now = new Date()
      db.collection("chats").doc(activeChat.chatId).update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          type: "text",
          author: auth.currentUser.uid,
          body: text,
          date: now
        })
      })
      setText("")
      for(let i in chatUsers){
        let u = await db.collection("users").doc(chatUsers[i]).get()
        let uData = u.data()
        if(uData.chats){
          let chats = [...uData.chats];
          for(let e in chats){
            if(chats[e].chatId == activeChat.chatId){
              chats[e].lastMessage = text
              chats[e].lastMessageDate = now
            }
          }
          await db.collection("users").doc(chatUsers[i]).update({
            chats
          })
        }
      }
    }
  }

  return (
    <div className="chat">
      <div className="chat-content">
        <div className="navbar">
          <div className="navbar-top">
            <img src={user.avatar} alt="" />
          </div>
          <div className="navbar-main">
            <button onClick={() => { OpenNewConversation() }}>
              <i class="bi bi-chat-square-dots-fill"></i>
            </button>
          </div>
          <button className="navbar-bottom" onClick={() => { logout() }}>
            <i class="bi bi-box-arrow-left"></i>
          </button>
        </div>
        <NewConversation  state={openNewConversation}
                          setState={setOpenNewConversation} 
                          func={OpenNewConversation}
                          conversation={newChatList}/>
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
                onClick={() => { setActiveChat(chatList[key]) }} />
            })}

          </div>
        </div>
        <div className="chat-main">
          {
            activeChat.chatId != undefined &&
            <>
              <div className="chat-main-top">
                <img src={activeChat.image} alt="" />
                <div>
                  <h1>{activeChat.title}</h1>
                  <span>Online</span>
                </div>
              </div>
              <div className="chat-main-content">
                <div ref={body} className="chat-main-content-chat-content">
                  {messageList.map((item, key) => {
                    return <ChatBalloon key={key}
                      data={item}
                      currentUser={user} />
                  })}
                </div>
                <div className="chat-main-content-down">
                  <div className="input-text">
                    <input type="text"
                      placeholder="Message"
                      value={text}
                      onChange={e => setText(e.target.value)} 
                      onKeyUp={keyPressEnter}/>
                    <i class="bi bi-emoji-laughing"></i>
                  </div>
                  <button onClick={()=>{sendMessage()}}>
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

