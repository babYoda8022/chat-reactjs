
import "./login.css"

import {Link} from "react-router-dom"

export default function Login() {

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
              <button>
                <i class="bi bi-google"></i>
                Continue whit Google
              </button>
              <button>
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

