import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/bucketlist">Bucket List</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
