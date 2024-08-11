import React from "react";
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
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
