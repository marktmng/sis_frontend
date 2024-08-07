import axios from "axios";
import React from "react";
import { BaseUrl } from "../Constants";
import "../Login.css";

function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login_status, setLogin_status] = React.useState("");

  function usernameHandler(e) {
    setUsername(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  // login handler
  function loginhandler() {
    let data = JSON.stringify({
      username: username,
      password: password,
    });

    let config = {
      method: "post", // Ensure POST method is used
      maxBodyLength: Infinity,
      url: BaseUrl + "auth/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLogin_status("Login Successful"); // show login status
        localStorage.setItem("Token", response.data.token); // store the token in local storage
      })
      .catch((error) => {
        console.log(error);
        setLogin_status("Login Failed"); // show login status
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          // Server responded with a status code out of the range of 2xx
          console.log("Response error:", error.response.data);
          setLogin_status("Login Failed: " + error.response.data.detail);
        } else if (error.request) {
          // No response was received
          console.log("Request error:", error.request);
          setLogin_status("Login Failed: No response from server");
        } else {
          // Other errors
          console.log("Error:", error.message);
          setLogin_status("Login Failed: " + error.message);
        }
      });
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username:</label>
        <input id="username" type="text" onChange={usernameHandler} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input id="password" type="password" onChange={passwordHandler} />
      </div>
      <button className="login-btn" onClick={loginhandler}>
        Login
      </button>
      <p id="login_status">{login_status}</p>
    </div>
  );
}

export default Login;
