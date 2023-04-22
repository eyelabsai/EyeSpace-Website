import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./views/Homepage/Homepage";
//import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/** Everything outside the BrowserRouter tag will be rendered on every single page */}
        <BrowserRouter>
          <Routes>
            {/** For each path we have, add a Route tag and put the tag. */}
            <Route path="/" element={<Homepage/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}