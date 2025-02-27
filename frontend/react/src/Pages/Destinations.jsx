import React from "react";
import "./Destinations.css"; 

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h1>Your Favourite Spots ?</h1>
      
      <div className="destination-row">
        
        <div className="destination">
          <img src="/images/Bali.jpeg" alt="Bali" />
          <p>Bali</p>
        </div>

        <div className="destination">
          <img src="/images/canada.jpeg" alt="Canada" />
          <p>Canada</p>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Japan.jpeg" alt="Japan" />
          <p>Japan</p>
        </div>
        <div className="destination">
          <img src="/images/switzerland.jpeg" alt="Switzerland" />
          <p>Switzerland</p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
