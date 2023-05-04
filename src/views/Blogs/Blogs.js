import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import './Blogs.css'; 
import { Link } from 'react-router-dom';
import Blog1 from '../../assets/blog1.svg'
import Blog2 from '../../assets/blog2.svg'


export default class Blogs extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="blog-div">
      <Header page="Blogs"/>
      <div id = "blog">

        <div id = "top">
          <div id = "title">Blogs Articles & Testimonials</div>
          <div id = "btn" className="blog-aboutus">
            <Link to="/AboutUs" style={{textDecoration: 'none'}}><button>Learn More About Us &gt; </button></Link>
          </div>
        </div>

        <div id = "cards">
          <div id = "blog-card">
            <div id = "article">
              <div id="blog-detail">
                <div id="blog-title">You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users</div>
                <div id="blog-content">Master ChatGPT by learning prompt engineering. — Most of us use ChatGPT wrong. We don’t include examples in our prompts. We ignore that we can control ChatGPT’s behavior with roles. We let ...</div>
                <div id="blog-date">04/04/2023</div>
              </div>
              <img className="card-img" src={Blog1} alt="Blog1 Logo"/>
            </div>
          </div>

          <div id = "blog-card">
            <div id = "article">
              <div id="blog-detail">
                <div id="blog-title">Use Git like a senior engineer</div>
                <div id="blog-content">Git is a powerful tool that feels great to use when you know how to use it. — I’ve used these features of Git for years across teams and projects. I’m still developing opinions around some workflows (like to squash or ...</div>
                <div id="blog-date">04/04/2023</div>
              </div>
              <img className="card-img" src={Blog2} alt="Blog2 Logo"/>
            </div>  
          </div>
        </div>

      </div>
      <Footer/>
    </div>
    );
  }
}

