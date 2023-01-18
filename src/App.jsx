import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./screens/login/login"
import Register from "./screens/register/register"

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

