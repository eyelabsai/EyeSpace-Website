import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from "../../firebase";
import logo from '../../assets/bimini_no_bg.png'
//import logo from '../../assets/RefracteX_logo.png';

const Button = ({ page }) => {
  const [userEmail, setUserEmail] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to get the current location

  const buttonsList = [
    "Technology",
    "About Us",
    // "RefracteX",
    "inSight",
    "Contact",
  ];

  const buttonsDict = {
    "Technology": "/Technology",
    "About Us": "/AboutUs",
    // "RefracteX": "/RefracteX",
    "inSight": "/Insight",
    "Contact": "/Contact",
  };

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true);
        setUserEmail(user.displayName || user.email); // Use email if displayName is not available
      } else {
        setIsUserLoggedIn(false);
      }
    });

    return () => {
      authListener(); // Unsubscribe from the listener when the component unmounts
    };
  }, []);

  const handleAuthButtonClick = () => {
    if (isUserLoggedIn) {
      // Log out the user
      auth.signOut()
        .then(() => {
          setIsUserLoggedIn(false);
          navigate("/"); // Redirect to home after logout
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    } else {
      // Redirect to the login page
      navigate("/Login");
    }
  };

  const getUserButtonContent = () => {
    return isUserLoggedIn ? "Logout" : "Login/Register";
  };

  return (
    <header>
      <nav>
        <ul className="navbar">
          <li className="logo">
            <Link to="/" style={{ textDecoration: 'none', display:'flex', justifyContent:'center'}}>
              <img className="logo-img" src={logo} alt="Bimini Logo" />
            </Link>
          </li>
          <li className="navigationLinks">
            <ul>
              {buttonsList.map((name) => (
                <li key={name}>
                  <Link to={buttonsDict[name]} style={{ textDecoration: 'none' }}>
                    <div
                      className="button"
                      style={{ color: location.pathname === buttonsDict[name] ? '#FF6400' : '#48627E' }}
                    >
                      {name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="login">
            <div
              className="login-button"
              onClick={handleAuthButtonClick} // Handle click for login/logout
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              {getUserButtonContent()}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Button.propTypes = {
  page: PropTypes.string,
};

export default Button;
