import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Pages/authapi";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await login(formData);
    setMessage(response.message);

    if (response.success) {
      localStorage.setItem("token", response.token);
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Login Failed: " + response.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />

          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
        <p>Don't have an account? <Link to="/signup">Create an Account</Link></p>
      </div>
    </div>
  );
};

export default Login;
