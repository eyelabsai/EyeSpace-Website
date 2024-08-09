import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Adjust the path if necessary
import { signOut, onAuthStateChanged } from "firebase/auth";
import Search from "../Search/Search";
import "./Nav.css";

const Nav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redirect or update state after successful logout
        navigate('/');
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://eyespace.ai/wp-content/uploads/cropped-EYESPACE-NEW-LOGO-JUST-LOGO-1-32x32.png"
            alt="EyeSpace Logo"
          />
        </Link>
      </div>

      <div className='search-container2'>
        <Search />
      </div>

      <div>
        {user ? (
          <button className="login" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/Login" className="login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
