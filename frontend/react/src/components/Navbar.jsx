import React from "react";
import { Link , useNavigate} from "react-router-dom";
import "./Navbar.css"; 

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);  // ✅ Ensure token is removed from state
    navigate("/login");

  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {token ? (
        <>
          <Link to="/feedback">Feedback</Link>
          <Link to="/bucketlist">Bucket List</Link>
          <Link to="/destinations">Destinations</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
