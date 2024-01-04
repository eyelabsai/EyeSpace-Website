import React from "react";
import Header from '../../components/header/Header';
import './Exchange.css'; 
import ForumReplacement from '../../assets/forum_replacement.png'
import Bg from '../../assets/blogbg.svg'
import ForumPostCard from "./ForumPostCard/ForumPostCard";
import './ForumPostCard/ForumPostCard.css'

function Exchange(props) {
  return (
    <div className="blog-div" style={{backgroundImage: `url(${Bg})`}}>
        <Header page="eXchange"/>
        <div>
          <div className = 'exchange-title'>
              <h1>Coming Soon</h1>
              <img src={ForumReplacement} alt="forum replacement"/>
          </div>
          <br></br><br></br><br></br><br></br>
          <div className="forum-postcard-container">
            <ForumPostCard/>
            <ForumPostCard/>
            <ForumPostCard/>
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    </div>
  );
}
export default Exchange;
