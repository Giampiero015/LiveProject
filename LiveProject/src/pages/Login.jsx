import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    onLogin();
  }

  function onLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(email) {
                console.log("login avvenuto con successo");
                resolve(localStorage.setItem("email",email))
            } else {
                console.log("email o password non corretti");
                reject("the email is not correct")
            }
        },5000)    
    })
  }

  return (
    <div id="login">
      <div className="form-signin w-40 m-auto">
        <form onSubmit={onSubmit}>
          <img
            className="mb-4"
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?w=740&t=st=1713453360~exp=1713453960~hmac=13a30d2ee5e26f3a122e61ea0de9d5321bcdcd51fe15d0520a3e3e3e2690495b"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleEmailChange}
              value={email}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
            <label>Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label">Remember me</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <button className="return-home">
            <Link to={"/"}>Return Home</Link>
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017-2024</p>
        </form>
      </div>
    </div>
  );
}
