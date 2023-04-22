import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./views/Homepage/Homepage";
import Blog from "./views/Blog/Blog";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
//import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/** Everything outside the BrowserRouter tag will be rendered on every single page (ex: nav bar and footer)*/}
        <BrowserRouter>
          <Routes>
            {/** For each path we have, add a Route tag to define which element to render depending on the path. */}
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/AboutUs" element={ AboutUs }></Route>
            <Route path="/Blog" element={ Blog }></Route>
            <Route path="/Contact" element={ Contact }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}