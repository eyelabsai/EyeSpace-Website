import React from "react";
import Header from "./components/header/Header";
//import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header name="Hello"/>
      </div>
    );
  }
}