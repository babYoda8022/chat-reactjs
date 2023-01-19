
import { useEffect, useState } from "react"
import { auth } from "../../service/firebase"

import "./chat.css"

export default function Chat() {

  const [userTrue, setUserTrue] = useState(false)

  const [user, setUser] = useState({
    nome: null,
    photoPath: null
  })

  auth.onAuthStateChanged((userCredential)=>{
    if(userCredential){
      setUserTrue(true)
      setUser({nome: userCredential.displayName, photoPath: userCredential.photoURL})
    }
  })
  return (
    <div className="chat">
      <div className="chat-content">
        <div className="navbar">
          <h1 className="userName">Luiz Roberto</h1>
        </div>
        <div className="sidbar">
          <h1>Messages(23)</h1>
          <div className="search">
            <input type="text" placeholder="Search"/>
            <i class="bi bi-search"></i>
          </div>
        </div>
        <div className="container-chat">
          <div className="topbar">
            <img src={user.photoPath} alt="" />
            <span>{user.nome}</span>
          </div>
          <div className="main"></div>
          <div className="footerbar"></div>
        </div>
      </div>
    </div>
  )
}

