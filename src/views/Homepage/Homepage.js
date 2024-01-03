import React from "react";
import Mission from "./Mission/Mission";
import Header from "../../components/header/Header";
import Card from "./Tools/Card/Card";
import "./Homepage.css";
import Banner from "./Banner/Banner";

export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
          <Header page="Home"/>
          <div className="body-div"><Banner/></div>
          <div className="body-div"><Card/></div>
          <div className="body-div"><Mission/></div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
      );
    }
  }

