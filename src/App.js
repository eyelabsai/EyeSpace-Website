import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./views/Homepage/Homepage";
import FocalPoint from "./views/Blogs/Blogs";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Technology from "./views/Technology/Technology";
import CreateAccount from "./views/CreateAccount/CreateAccount"
//import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/** Everything outside the BrowserRouter tag will be rendered on every single page (ex: nav bar and footer)*/}
        <BrowserRouter>
          <Routes>
            {/** For each path we have, add a Route tag to define which element to render depending on the path. */}
            <Route path="/" element={ <Homepage/> }></Route>
            <Route path="/AboutUs" element={ <AboutUs/> }></Route>
            <Route path="/FocalPoint" element={ <FocalPoint/> }></Route>
            <Route path="/Contact" element={ <Contact/> }></Route>
            <Route path="/Login" element={ <Login/> }></Route>
            <Route path="/Technology" element={ <Technology/> }></Route>
            <Route path="/CreateAccount" element={ <CreateAccount/> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}