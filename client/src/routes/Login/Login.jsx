import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import styled from "styled-components";

import "./login.css";

const Login = () => {
  const { handleUserInputs } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = e => {
    e.preventDefault();
    handleUserInputs(username, password);
  };

  return (
    <div className="login-container">
      <form className="form-container" onSubmit={e => handleForm(e)}>
        <h1>Login page</h1>
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

const FormContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 441px;
  height: 421px;
  background-color: #262626;

  button {
    margin-bottom: 20px;
  }
`;

export default Login;
