import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome!, Your ultimate guide to planning and fulfilling your dream adventures.</p>

      <div className="about-content">
        <div className="about-text">
          <h2> Our Mission</h2>
          <p>We help travelers explore stunning destinations and create unforgettable memories. Whether you love beaches, mountains, or historical places, we’ve got you covered!</p>

          <h2> What We Offer</h2>
          <ul>
            <li>Curated travel destinations</li>
            <li> Personalized bucket lists</li>
            <li> User-friendly trip planning</li>
            <li>Community travel experiences</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="/images/hill.jpg" alt="Travel" />
        </div>
      </div>
    </div>
  );
};

export default About;

