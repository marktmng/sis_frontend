import axios from "axios";
import React from "react";
import { BaseUrl } from "../Constants";

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

  function loginhandler() {
    let data = JSON.stringify({
      username: username,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BaseUrl + 'auth/',
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLogin_status("Login Successful");
      })
      .catch((error) => {
        console.log(error);
        setLogin_status("Login Failed");
      });
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>
        Username:{" "}
        <input id={"username"} type={"text"} onChange={usernameHandler} />
      </p>
      <p>
        Password:{" "}
        <input id={"password"} type={"password"} onChange={passwordHandler} />
      </p>
      <p>
        <button id={"loginbtn"} onClick={loginhandler}>
          Login
        </button>
      </p>
      <p id={"login_status"}>{login_status}</p>
    </div>
  );
}

export default Login;
