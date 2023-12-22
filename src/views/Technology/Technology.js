// Inside your Technology.js file
import React from "react";
import PropTypes from "prop-types";
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import BlogCard from './TechnologyCard';
import './Technology.css'; 
import Blog3 from '../../assets/OptiCalc SVG.svg'
import Blog4 from '../../assets/blog4.svg'
import Blog5 from '../../assets/blog5.svg'
import Blog6 from '../../assets/eyeSpace Logo-2.png' // Ensure the image path is correct
import Bg from '../../assets/blogbg.svg'

export default class Technology extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  info = [
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
    {
      title: "Eyespace App",
      content: "EYESPACE is a technology consulting firm co-owned and managed by Matt Hirabayashi MD and Gurpal Virdi MD. The eyeSpace iOS Application is a cross-platform ophthalmology utility, social media, networking service that provides users with a wide array of eye care tools to optimize and track their surgical outcomes.",
      date: "04/04/2023",
      image: Blog6,
      
    },
  ]

  render() {
    return (
      <div className="blog-div" style={{backgroundImage: `url(${Bg})`}}>
        <Header page="Technology" />
        <div id="blog">
          <div id="top">
            <div id="title">Technology</div>
          </div>
          <div className="BlogCards">
            {this.info.map((obj) => {
              return (
                <BlogCard
                  title={obj.title}
                  content={obj.content}
                  date={obj.date}
                  image={obj.image}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
