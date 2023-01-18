import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./screens/login/login"
import Register from "./screens/register/register"
import Chat from './screens/chat/chat'

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

