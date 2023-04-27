import React from "react";
import Mission from "./Mission/Mission";
import Header from "../../components/header/Header";
import Card from "./Tools/Card/Card";
import Footer from "../../components/footer/Footer";
import "./Homepage.css";

export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
          <Header page="Home"/>
          <Card/>
          <Mission/>
          <div className="footer-div"><Footer/></div>
        </div>
      );
    }
  }