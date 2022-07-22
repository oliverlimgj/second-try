import { useState, useEffect } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./Login2.css";

function Login2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function Login() {
    console.warn(username, password);
  }

  const onNavigateSignup = () => {
    history.push('/signup');
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -40%)"
      }}
    >
      <div className="warningMessage" style={{ justifyContent: "center" }}>
        <h1
          style={{
            position: "absolute",
            left: "50%",
            top: "0%",
            transform: "translate(-50%, -100%)",
          }}
        >
          Welcome to DBS Bank
        </h1>
      </div>
      <br></br>
      <br></br>
      <form className="loginForm">
        <h1>iBanking Login</h1>
        Please input your login details
        <div style={{ marginTop: 30, marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          ></input>

          <br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          ></input>

          <br />
          <button
            onClick={Login}
            className="btn btn-primary"
            width="300"
            height="300" 
          >
            Login
          </button>
          &nbsp;&nbsp;&nbsp;

          <button
            onClick={onNavigateSignup}
            className="btn btn-outline-primary"
            width="300"
            height="300" 
          >
            Signup
          </button>

        </div>
      </form>
    </div>
  );
}

export default Login2;
