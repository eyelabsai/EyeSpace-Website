import "./Header.css";
import { Link } from "react-router-dom";


const Header = ({ page }) => {

  const buttonsList = [
    "Technology",
    "About Us",
    "eXchange",
    "inSight",
    "Contact",
  ];

  const buttonsDict = {
    Technology: "/Technology",
    "About Us": "/AboutUs",
    eXchange: "/Exchange",
    inSight: "/Insight",
    Contact: "/Contact",
  };

  return (
    <div className="header-container">

          <div className="navigationLinks">
            <ul>
              {buttonsList.map((name) => (
                <li key={name}>
                  <Link
                    to={buttonsDict[name]}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="button"
                      style={{ color: page === name ? "#FF6400" : "#48627E" }}
                    >
                      {name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
    </div>
  );
};
export default Header;
