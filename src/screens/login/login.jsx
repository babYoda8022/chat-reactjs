
import "./login.css"
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../service/firebase"
import { useState } from "react"

import Register from "../../screens/register/register"


export default function Login() {

  const [create, setCreate] = useState(false)

  async function signInWithFacebook() {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
      .then((user) => {

      }).catch((error) => {
        console.log(error)
      })
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((respo) => {

      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="login">
      {
        create == false &&
        <>
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
                  <button onClick={() => signInWithGoogle()}>
                    <i class="bi bi-google"></i>
                    Continue whit Google
                  </button>
                  <button onClick={() => signInWithFacebook()}>
                    <i class="bi bi-facebook"></i>
                    Continue whith Faceboock
                  </button>
                </div>
              </div>
              <div className="box-3">
                <div>
                  <span>Dont have an account ?</span>
                  <button className="creat-account" onClick={()=>{setCreate(true)}}>Create Account</button>
                </div>
              </div>
            </div>
          </div>
        </>
      }
      {
        create &&
        <>
          <Register setCreate={setCreate}/>
        </>
      }

    </div>
  )
}

