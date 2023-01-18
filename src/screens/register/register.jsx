import "./register.css"
export default function Register() {

  return (
    <div className="login">
      
      <div className="img-3"></div>
      <div className="img-4"></div>

      <div className="container">
        <div className="container-content">
          <h1>Create account.</h1>
          <div className="box">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm password" />
          </div>
          <div className="box-2">
            <button className="button-login">Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

