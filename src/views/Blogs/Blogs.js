import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import BlogCard from './BlogCard';
import './Blogs.css'; 
import { Link } from 'react-router-dom';
import Blog1 from '../../assets/blog1.svg'
import Blog2 from '../../assets/blog2.svg'
import Bg from '../../assets/blogbg.svg'

export default class Blogs extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  info = [
    {
      title: "You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users",
      content: "Master ChatGPT by learning prompt engineering. — Most of us use ChatGPT wrong. We don’t include examples in our prompts. We ignore that we can control ChatGPT’s behavior with roles. We let ...",
      date: "04/04/2023",
      image: Blog1
    },
    {
      title: "Use Git like a senior engineer",
      content: "Git is a powerful tool that feels great to use when you know how to use it. — I’ve used these features of Git for years across teams and projects. I’m still developing opinions around some workflows (like to squash or ...",
      date: "04/04/2023",
      image: Blog2
    },
  ]

  render() {
    return (
      <div className="blog-div" style={{backgroundImage: `url(${Bg})`}}>
          <Header page="Blogs"/>
          <div id = "blog">
            <div id = "top">
              <div id = "title">Blogs Articles & Testimonials</div>
              <div id = "btn" className="blog-aboutus">
                <Link to="/AboutUs" style={{textDecoration: 'none'}}><button>Learn More About Us &gt; </button></Link>
              </div>
            </div>

            <div className="BlogCards">
              {
                this.info.map((obj) => {
                  return (
                    <BlogCard title={obj.title} content={obj.content} date={obj.date} image={obj.image}/>
                  )
                })
              }
            </div>
          </div>
          <Footer/>
      </div>
  );
  }
}