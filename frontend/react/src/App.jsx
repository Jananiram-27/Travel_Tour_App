import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Feedback from "./Pages/Feedback";
import BucketList from "./Pages/BucketList";
import Destinations from "./Pages/Destinations";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </Router>
  );
};

export default App;
