import React, { useState } from "react";
import { submitFeedback } from "../Pages/authapi";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await submitFeedback(formData);

    if (response.success) {
      setSuccessMessage("✅ Thank you for your feedback!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccessMessage(" Feedback submission failed.");
    }
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback Form</h1>

      {successMessage ? (
        <p className="success-message">{successMessage}</p>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write your feedback here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
