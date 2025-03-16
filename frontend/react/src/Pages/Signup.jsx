import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../Pages/authapi";  // Import the API function
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState(""); // To show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signup(formData);  // Call the API function
    setMessage(response.message);  // Set response message

    if (response.success) {
      alert("Signup Successful!");  // Show success alert
    } else {
      alert("Signup Failed: " + response.message); // Show error alert
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />

          <button type="submit">Sign Up</button>
        </form>
        {message && <p>{message}</p>}
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Signup;
