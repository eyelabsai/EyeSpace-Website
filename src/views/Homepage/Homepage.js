import React from "react";
import Header from "../../components/header/Header";
// be sure to import the css file!

export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
          <Header page="Home"/>
          <h1>Home</h1>
        </div>
      );
    }
  }