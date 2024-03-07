// Inside your Technology.js file
import React from "react";
import PropTypes from "prop-types";
import Header from '../../components/header/Header';
import './Technology.css'; 
import Blog3 from '../../assets/OptiCalc SVG.svg'
import Blog4 from '../../assets/blog4.svg'
import Blog5 from '../../assets/blog5.svg'
import Blog6 from '../../assets/eyeSpace Logo-2.png' // Ensure the image path is correct
import Bg from '../../assets/blogbg.svg'
import TechnologyCard from "./TechnologyCard";

export default class Technology extends React.Component {
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  info = [
    {
      title: "Vault",
      content: "VAULT is an AI-driven tool to accurately predict postoperative vault of the EVO Visian ICL™ (Implanted Collamer® Lens). The goal is to create an accurate, repeatable, and continuously improving machine-learning based tool for the prediction of post-operative ICL™ Vault using various imaging modalities (e.g., Ultrasound Biomicroscopy and Anterior Segment OCT). The models have been developed and are trained with data from refractive surgery cases in the United States at a high volume surgery center.",
      collaborators: "Taj Nasser MD, Greg Parkhurst MD",
      image: Blog5
    },
    {
      title: "OptiCalc Ai",
      content: "OptiCalc is an AI-Driven IOL formula that utilizes pre-operative imaging routinely obtained with biometry. These include the OCT and topography images from the ZEISS IOLMaster® and Scheimpflug images from the OCULUS Pentacam®. This novel, image-driven approach provides additional benefits for machine learning models beyond simply feeding algorithms raw numbers. Important anatomical relationships may greatly impact effective lens position and final refractive outcome.",
      collaborators: "Taj Nasser MD, Geetha Davis MD",
      image: Blog3
    },
    {
      title: "The Perfect Test",
      content: "The PERFECT Test is an image-based machine learning project aiming to create an accurate, repeatable, and continuously improving tool for the prediction of corneal ectasia development. This will assist clinicians in the diagnosis of corneal ectasia as well as screening for refractive surgery candidates.",
      collaborators: "Jack Holladay MD, Taj Nasser MD, James Landreneau MD",
      image: Blog4
    },
    {
      title: "Eyespace App",
      content: " eyeSpace is a multi platform ophthalmology utility grounded in the iOS app. It has multiple tools to assist clinicians optimize patient outcomes. Download in the app store today or access the web-based tools below.",
      image: Blog6,
      
    },
  ]

  render() {
    return (
      <div className="blog-div" style={{backgroundImage: `url(${Bg})`}}>
        <Header page="Technology" />
        <div id="blog">
            <div className="technology-title"><strong>CURRENT TECHNOLOGY</strong></div>
          <div className="blog-cards-container">
            {this.info.map((obj) => {
              return (
                <TechnologyCard
                  title={obj.title}
                  content={obj.content}
                  collaborators={obj.collaborators}
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
