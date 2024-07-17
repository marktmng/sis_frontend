import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../Constants";
import "../Style.css";

function Registration(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [register_status, setRegister_status] = useState("");

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/registration/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // Assuming response.data is an array of registration objects
        // console.log('Registration:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function registerHandler() {
    // Find the selected program ID based on the program name
    const program = programs.find((p) => p.name === selectedProgram);
    const programId = program ? program.id : null;

    let data = JSON.stringify({
      name: name,
      program: programId,
      email: email,
      username: username,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/registration/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setRegister_status("Registration Successful"); // show register status
      })
      .catch((error) => {
        console.log(error);
        setRegister_status("Registration Failed"); // show register status
      });
  }

  function prgFetch() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/program/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setPrograms(response.data);
        console.log("Programs:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    prgFetch();
  }, []);

  return (
    <div class="registration-form">
      <h2>Register</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="program">Program:</label>
        <select
          id="program"
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
        >
          <option value="">Select Program</option>
          {programs.map((program) => (
            <option key={program.id} value={program.name}>
              {program.name}
            </option>
          ))}
        </select>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button class="register-btn" onClick={registerHandler}>
        Register
      </button>
      <p class="register-status">{register_status}</p>
    </div>
  );
}

export default Registration;
