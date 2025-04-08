import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Feedback from "./Pages/Feedback";
import BucketList from "./Pages/BucketList";
import Destinations from "./Pages/Destinations";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const decodedToken = JSON.parse(atob(storedToken.split(".")[1])); // Decode JWT
        const expiry = decodedToken.exp * 1000; // Convert to milliseconds
        if (expiry > Date.now()) {
          setToken(storedToken);
        } else {
          console.log("Token expired");
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
      }
    }

    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    window.location.href = "/login"; // 🔹 Redirect to login after logout
  };

  return (
    <Router>
      <Navbar token={token} setToken={setToken} logout={logout} />
      <Routes>
        {/* ✅ Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />

        {/* 🔒 Protected Pages */}
        <Route path="/feedback" element={token ? <Feedback /> : <Navigate to="/login" />} />
        <Route path="/bucketlist" element={token ? <BucketList /> : <Navigate to="/login" />} />
        <Route path="/destinations" element={token ? <Destinations /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
