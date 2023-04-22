import React from "react";
// import "./Homepage.css";

// import your component here so you can use it
import Mission from "./Mission/Mission";

export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
          {/** This is where you use the component that you used. Simply type the component name inside of <ComponentName/> */}
          <Mission/>
        </div>
      );
    }
  }