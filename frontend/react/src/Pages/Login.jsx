import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Pages/authapi";
import "./Login.css";

const Login =  ({ setToken }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { email, password } = formData; // 🔹 Get values from state
  
    const response = await login(email, password); // 🔹 Call API without setToken
    console.log("Login Response:", response);
    setMessage(response.message);
  
    if (response.success && response.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
  
      if (setToken) {  // 🔹 Check if setToken is passed
        setToken(response.token);
      } else {
        console.error("setToken is not defined!"); // 🔴 Debugging log
      }
  
      console.log("Login successful! Token:", response.token);
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
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email} // ✅ Controlled input
            onChange={handleChange} 
            required 
          />

          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
            value={formData.password} // ✅ Controlled input
            onChange={handleChange} 
            required 
          />

          <button type="submit">Login</button>
        </form>


        {message && <p>{message}</p>}
        <p>Don't have an account? <Link to="/signup">Create an Account</Link></p>
      </div>
    </div>
  );
};

export default Login;
