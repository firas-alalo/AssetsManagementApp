import React, { useEffect, useState } from "react";
import "../styles/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {}
  };

  const handleUserInput = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1 className="login-headline">Assets Management App</h1>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => handleUserInput(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => handlePasswordInput(e.target.value)}
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
