import React from "react";
import Mission from "./Mission/Mission";
// be sure to import the css file!

export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
          Insert your Component Tag here (under src/views/Homepage.js)
          <Mission/>
        </div>
      );
    }
  }