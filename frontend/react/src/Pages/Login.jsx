import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Create an Account</Link></p>
      </div>
    </div>
  );
};

export default Login;

