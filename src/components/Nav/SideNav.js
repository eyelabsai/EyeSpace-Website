import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  const navItems = [
    "Anterior Segment, Cataract, & Cornea",
    "Glaucoma",
    "Retina",
    "Neuro-Opthamology",
    "Pediatric Opthamology",
    "Ocular Oncology",
    "Oculoplastic Surgery",
    "Uveitis", 
    "Residents & Fellows",
    "Medical Students",
    "Company Representatives"
  ];

  return (
    <div className="side-nav">
      <ul>
        <li>Sub Reddits</li>
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            {/* Link to the SubReddit page and pass the subreddit name as a URL parameter */}
            <Link to={`/subreddit/${encodeURIComponent(item)}`} className='subreddit-link'>
              i/{item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;

