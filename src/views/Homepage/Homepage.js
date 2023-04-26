import React from "react";
import Mission from "./Mission/Mission";
import Header from "../../components/header/Header";
// import "./Homepage.css";

// import your component here so you can use it
import Card from "./Tools/Card/Card";

export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
         
          <Header page="Home"/>
          <Card/>
          <Mission/>
          {/** This is where you use the component that you used. Simply type the component name inside of <ComponentName/> */}
          
        </div>
      );
    }
  }