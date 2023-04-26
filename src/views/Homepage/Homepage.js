import React from "react";
import Mission from "./Mission/Mission";
import Header from "../../components/header/Header";
// import "./Homepage.css";


export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
         
          <Header page="Home"/>
          <Mission/>
          <h1>Home</h1>
        </div>
      );
    }
  }