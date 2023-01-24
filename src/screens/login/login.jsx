
import "./login.css"
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../service/firebase"

import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Login() {

  const navegate = useNavigate()

  auth.onAuthStateChanged((user)=>{
    if(user){
      navegate("/chat")
    }
  })

  async function signInWithFacebook(){
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
    .then((user)=>{
      navegate("/chat")
    }).catch((error)=>{
      console.log(error)
    })
  }

  function signInWithGoogle(){
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((respo)=>{
      navegate("/chat")
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="login">
      
      <div className="img-1"></div>
      <div className="img-2"></div>

      <div className="container">
        <div className="container-content">
          <h1>Sign in.</h1>
          <div className="box">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </div>
          <div className="box-2">
            <button className="button-login">Sign in</button>
            <p>Or</p>
            <div>
              <button onClick={()=>signInWithGoogle()}>
                <i class="bi bi-google"></i>
                Continue whit Google
              </button>
              <button onClick={()=>signInWithFacebook()}>
                <i class="bi bi-facebook"></i>
                Continue whith Faceboock
              </button>
            </div>
          </div>
          <div className="box-3">
            <div>
              <span>Dont have an account ?</span>
              <button><Link to="register" className="button">Create Account</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

