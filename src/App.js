import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Header from './components/header/Header';
import SearchResults from "./views/SearchResults/SearchResults";
import SubReddits from "./views/SubReddits/SubReddits";
import UserPostsPage from "./views/UserPostsPage/UserPostsPage";
import MyPosts from "./views/MyPostsPage/MyPostsPage";
import ForumPostDetails from "./views/ForumPostDetails/ForumPostDetails";

const App = () => {
  return (
    <div className="App">
      {/** Everything outside the BrowserRouter tag will be rendered on every single page (ex: nav bar and footer)*/}
      <BrowserRouter>
        <Header/>
        <Routes>
          {/** For each path we have, add a Route tag to define which element to render depending on the path. */}
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/RefracteX" element={<Exchange />} />
          <Route path="/Insight" element={<Insight />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/search" element={<SearchResults />} /> {/* Add route for search results */}
          <Route path="/subreddit/:subreddit" element={<SubReddits />} />
          <Route path="/myposts" element={<MyPosts /> } />
          <Route path="/user-posts/:uid" element={<UserPostsPage   />} />
          <Route path="/post/:postID" element={<ForumPostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
