import './App.css'

import { auth } from "./service/firebase"
import { useState } from 'react'

import Login from "./screens/login/login"
import Register from "./screens/register/register"
import Chat from './screens/chat/chat'

export default function App() {

  const [login, setLogin] = useState(false)

  auth.onAuthStateChanged((user)=>{
    if(user){
      setLogin(true)
    }
  })

  return (
    <div className="App">
      {
        login == false &&
        <>
          <Login />
        </>
      }
      {
        login &&
        <>
          <Chat setLogin={setLogin}/>
        </>
      }
    </div>
  )
}

