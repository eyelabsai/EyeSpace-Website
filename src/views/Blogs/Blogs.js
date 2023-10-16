import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import BlogCard from './BlogCard';
import './Blogs.css'; 
import { Link } from 'react-router-dom';
import Blog1 from '../../assets/blog1.svg'
import Blog2 from '../../assets/blog2.svg'
import Blog3 from '../../assets/blog3.svg'
import Blog4 from '../../assets/blog4.svg'
import Blog5 from '../../assets/blog5.svg'
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
    {
      title: "OptiCalc Ai",
      content: "OptiCalc is an AI-Driven IOL formula that utilizes pre-operative imaging routinely obtained with biometry. These include the OCT and topography images from the ZEISS IOLMaster® and Scheimpflug images from the OCULUS Pentacam®. This novel, image-driven approach provides additional benefits for machine learning models beyond simply feeding algorithms raw numbers. Important anatomical relationships may greatly impact effective lens position and final refractive outcome.",
      date: "04/04/2023",
      image: Blog3
    },
    {
      title: "The Perfect Test",
      content: "The PERFECT Test is an image-based machine learning project aiming to create an accurate, repeatable, and continuously improving tool for the prediction of corneal ectasia development. This will assist clinicians in the diagnosis of corneal ectasia as well as screening for refractive surgery candidates.",
      date: "04/04/2023",
      image: Blog4
    },
    {
      title: "Vault",
      content: "VAULT is an AI-driven tool to accurately predict postoperative vault of the EVO Visian ICL™ (Implanted Collamer® Lens). The goal is to create an accurate, repeatable, and continuously improving machine-learning based tool for the prediction of post-operative ICL™ Vault using various imaging modalities (e.g., Ultrasound Biomicroscopy and Anterior Segment OCT). The models have been developed and are trained with data from refractive surgery cases in the United States at a high volume surgery center.",
      date: "04/04/2023",
      image: Blog5
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