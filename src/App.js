// import React from "react";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Homepage from "./views/Homepage/Homepage";
// import Exchange from "./views/Exchange/Exchange";
// import AboutUs from "./views/AboutUs/AboutUs";
// import Contact from "./views/Contact/Contact";
// import Login from "./views/Login/Login";
// import Technology from "./views/Technology/Technology";
// import CreateAccount from "./views/CreateAccount/CreateAccount"
// import ForgotPassword from "./views/ForgotPassword/ForgotPassword";
// import UserProfile from "./views/UserProfile/UserProfile";
// import Insight from "./views/Insight/Insight"
// import Nav from "./components/Nav/Nav";
// import Header from "./components/header/Header";


// //import './App.css';

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         {/** Everything outside the BrowserRouter tag will be rendered on every single page (ex: nav bar and footer)*/}
//         <BrowserRouter>
//           <Nav/>
//           <Header/>
//           <Routes>
//             {/** For each path we have, add a Route tag to define which element to render depending on the path. */}
//             <Route path="/Home" element={ <Homepage/> }></Route>
//             <Route path="/AboutUs" element={ <AboutUs/> }></Route>
//             <Route path="/" element={ <Exchange/> }></Route>
//             <Route path="/Insight" element={ <Insight/> }></Route>
//             <Route path="/Contact" element={ <Contact/> }></Route>
//             <Route path="/Login" element={ <Login/> }></Route>
//             <Route path="/Technology" element={ <Technology/> }></Route>
//             <Route path="/CreateAccount" element={ <CreateAccount/> }></Route>
//             <Route path="/ForgotPassword" element={ <ForgotPassword/> }></Route>
//             <Route path="/UserProfile" element={ <UserProfile/> }></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import Exchange from "./views/Exchange/Exchange";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Technology from "./views/Technology/Technology";
import CreateAccount from "./views/CreateAccount/CreateAccount";
import ForgotPassword from "./views/ForgotPassword/ForgotPassword";
import UserProfile from "./views/UserProfile/UserProfile";
import Insight from "./views/Insight/Insight";
import Nav from "./components/Nav/Nav";
import Header from "./components/header/Header";
import "./App.css"; // Add this import for styling the layout
import SearchResults from "./views/SearchResults/SearchResults";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="app-layout">
            <Header className="app-sidebar" />
            <div className="app-content">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Exchange" element={<Exchange />} />
                <Route path="/Insight" element={<Insight />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Technology" element={<Technology />} />
                <Route path="/CreateAccount" element={<CreateAccount />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
