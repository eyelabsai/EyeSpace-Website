// // import React, { useState, useEffect } from "react";
// // import PropTypes from "prop-types";
// // import './Header.css';
// // import logo from '../../assets/LOGO HORIZONTAL SVG.svg';
// // import { Link } from 'react-router-dom';
// // import { auth } from "../../firebase";

// // const Button = ({ page }) => {
// //   const [userEmail, setUserEmail] = useState('');
// //   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

// //   const buttonsList = [
// //     // "Home", 
// //     "Technology", 
// //     "About Us", 
// //     "eXchange", 
// //     "inSight", 
// //     "Contact", 
// //   ];

// //   const buttonsDict = {
// //     // "Home": "/",
// //     "Technology": "/Technology",
// //     "About Us": "/AboutUs",
// //     "eXchange": "/Exchange",
// //     "inSight": "/Insight",
// //     "Contact": "/Contact",
// //   };

// //   useEffect(() => {
// //     const authListener = auth.onAuthStateChanged((user) => {
// //       if (user) {
// //         setIsUserLoggedIn(true);
// //         setUserEmail(user.displayName);
// //       } else {
// //         setIsUserLoggedIn(false);
// //       }
// //     });

// //     return () => {
// //       authListener(); // Unsubscribe from the listener when the component unmounts
// //     };
// //   }, []);

// //   const getUserButtonContent = () => {
// //     return isUserLoggedIn ? userEmail : "Login/Register";
// //   };

// //   const getLoginNavigationPage = () => {
// //     return isUserLoggedIn ? "/UserProfile" : "/Login";
// //   };

// //   return (
// //     <header>
// //       <nav>
// //         <ul className="navbar">
// //           <li className="logo">
// //             <Link to="/" style={{ textDecoration: 'none' }}>
// //               <img className="logo-img" src={logo} alt="EyeSpace Logo" />
// //             </Link>
// //           </li>
// //           <li className="navigationLinks">
// //             <ul>
// //               {buttonsList.map((name) => (
// //                 <li key={name}>
// //                   <Link to={buttonsDict[name]} style={{ textDecoration: 'none' }}>
// //                     <div className="button">
// //                       {name}
// //                     </div>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </li>
// //           <li className="login">
// //             <Link to={getLoginNavigationPage()} style={{ textDecoration: 'none' }}>
// //               <div className="login-button">
// //                 {getUserButtonContent()}
// //               </div>
// //             </Link>
// //           </li>
// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // };

// // Button.propTypes = {
// //   page: PropTypes.string,
// // };

// // export default Button;

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import './Header.css';
// import logo from '../../assets/LOGO HORIZONTAL SVG.svg';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from "../../firebase";

// const Button = ({ page }) => {
//   const [userEmail, setUserEmail] = useState('');
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Hook for programmatic navigation

//   const buttonsList = [
//     // "Home", 
//     "Technology", 
//     "About Us", 
//     "eXchange", 
//     "inSight", 
//     "Contact", 
//   ];

//   const buttonsDict = {
//     // "Home": "/",
//     "Technology": "/Technology",
//     "About Us": "/AboutUs",
//     "eXchange": "/Exchange",
//     "inSight": "/Insight",
//     "Contact": "/Contact",
//   };

//   useEffect(() => {
//     const authListener = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setIsUserLoggedIn(true);
//         setUserEmail(user.displayName || user.email); // Use email if displayName is not available
//       } else {
//         setIsUserLoggedIn(false);
//       }
//     });

//     return () => {
//       authListener(); // Unsubscribe from the listener when the component unmounts
//     };
//   }, []);

//   const handleAuthButtonClick = () => {
//     if (isUserLoggedIn) {
//       // Log out the user
//       auth.signOut()
//         .then(() => {
//           setIsUserLoggedIn(false);
//           navigate("/"); // Redirect to home after logout
//         })
//         .catch((error) => {
//           console.error("Error signing out:", error);
//         });
//     } else {
//       // Redirect to the login page
//       navigate("/Login");
//     }
//   };

//   const getUserButtonContent = () => {
//     return isUserLoggedIn ? "Logout" : "Login/Register";
//   };

//   return (
//     <header>
//       <nav>
//         <ul className="navbar">
//           <li className="logo">
//             <Link to="/" style={{ textDecoration: 'none' }}>
//               <img className="logo-img" src={logo} alt="EyeSpace Logo" />
//             </Link>
//           </li>
//           <li className="navigationLinks">
//             <ul>
//               {buttonsList.map((name) => (
//                 <li key={name}>
//                   <Link to={buttonsDict[name]} style={{ textDecoration: 'none' }}>
//                     <div className="button">
//                       {name}
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </li>
//           <li className="login">
//             <div
//               className="login-button"
//               onClick={handleAuthButtonClick} // Handle click for login/logout
//               style={{ cursor: 'pointer', textDecoration: 'none' }}
//             >
//               {getUserButtonContent()}
//             </div>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// Button.propTypes = {
//   page: PropTypes.string,
// };

// export default Button;
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './Header.css';
import logo from '../../assets/LOGO HORIZONTAL SVG.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from "../../firebase";

const Button = ({ page }) => {
  const [userEmail, setUserEmail] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to get the current location

  const buttonsList = [
    "Technology",
    "About Us",
    "eXchange",
    "inSight",
    "Contact",
  ];

  const buttonsDict = {
    "Technology": "/Technology",
    "About Us": "/AboutUs",
    "eXchange": "/Exchange",
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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img className="logo-img" src={logo} alt="EyeSpace Logo" />
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
