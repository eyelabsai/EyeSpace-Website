// import React from "react";
// import PropTypes from "prop-types";
// import './TechnologyCard.css';
// import appstore from "../../assets/download-on-appstore.png"
// import exchange from "../../assets/technology-exchange.png"
// import iolreference from "../../assets/technology-iolreference.png"
// import outcome from "../../assets/technology-outcome.png"
// import sulcus from "../../assets/technology-sulcus.png"
// import transposition from "../../assets/technology-transposition.png"


// export default class TechnologyCard extends React.Component {
//     static propTypes = {
//         title: PropTypes.string,
//         content: PropTypes.string,
//         collaborators: PropTypes.string,
//         image: PropTypes.string,
//     };

//     render() {
//         const { title, content, collaborators, image } = this.props;

//         // Check if the title is "Eyespace App" 
//         if (title === "Eyespace App") {
//             return (
//                 <div id="blog-card">
//                     <div id="article" className="technology-right-align">
//                         <div>
//                             <img className="technology-card-img" src={image} alt={title} />
//                         </div>
//                         <div id="blog-detail">
//                             <div id="blog-content">
//                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                 {content}
//                             </div>
//                         </div>
//                     </div>
//                     <a href="https://apps.apple.com/us/app/eye-space/id1626671895" target="_blank" rel="noopener noreferrer">
//                         <img className="technology-appstore-img" src={appstore} alt="Download On Appstore" />
//                     </a>
//                     <div className="eyespace-card-container">
//                         <div className="eyespace-card">
//                             <div className="eyespace-card-title">IOL Reference</div>
//                             <img className="eyespace-card-img" src={iolreference} alt="iolreference"/>
//                             <div className="eyespace-card-content">
//                                 Browse the entire spectrum of current FDA approved IOLs and find the right lens for any case using a novel search function. This is the ONLY accurate and current source one FDA approved IOL information.
//                             </div>
//                             <br></br><br></br><br></br><br></br>
//                         </div>
//                         <div className="eyespace-card">
//                             <div className="eyespace-card-title">Transposition Tool</div>
//                             <img className="eyespace-card-img" src={transposition} alt="iolreference"/>
//                             <div className="eyespace-card-content">
//                             Easily transpose between positive and negative cylinder.                            </div>
//                             <br></br><br></br><br></br><br></br>
//                         </div>
//                         <div className="eyespace-card">
//                             <div className="eyespace-card-title">Sulcus Correction Tool</div>
//                             <img className="eyespace-card-img" src={sulcus} alt="iolreference"/>
//                             <div className="eyespace-card-content">
//                             Quickly perform adjustments to select the correct IOL power when moving an IOL from the capsule to the sulcus.                        </div>
//                             <br></br><br></br><br></br><br></br>
//                         </div>
//                         <div className="eyespace-card">
//                             <div className="eyespace-card-title">Refractive Outcome Tracking</div>
//                             <img className="eyespace-card-img" src={outcome} alt="iolreference"/>
//                             <div className="eyespace-card-content">
//                             This is a state of the art outcome tracking utility that analyzes your cataract cases to learn more about refractive outcomes, surgically induced astigmatism, and personalized A-constants. This feature is currently only available in the app but will have a web interface soon.
//                             </div>
//                             <br></br><br></br><br></br><br></br>
//                         </div>
//                         <div className="eyespace-card">
//                             <div className="eyespace-card-title">eyeSpace Exchange</div>
//                             <img className="eyespace-card-img" src={exchange} alt="iolreference"/>
//                             <div className="eyespace-card-content">
//                             Connect with colleagues, mentors, and mentees to discuss cases, gather wisdom, and gain support.                           
//                             </div>
//                             <br></br><br></br><br></br><br></br>
//                         </div>
//                         <div className="eyespace-card">
//                             <div className="eyespace-card-title">inSight</div>
//                             <img className="eyespace-card-img" src={exchange} alt="iolreference"/>
//                             <div className="eyespace-card-content">
//                             Read and submit short articles to stay up to date and keep others current on new technological advances in ophthalmology.                            
//                             </div>
//                             <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
//                         </div>
//                     </div>
//                 </div>
//             );
//         } else {
//             // Render a different block for other blog titles
//             return (
//                 <div id="blog-card">
//                     <div id="article">
//                         <img className="technology-card-img" src={image} alt={title} />
//                         <div id="blog-detail">
//                             <div id="blog-content">
//                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                 {content}
//                                 <br></br><br></br>
//                                 <strong>Collaborators:</strong> {collaborators}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         }
//     }
// }

import React from "react";
import PropTypes from "prop-types";
import './TechnologyCard.css';
import appstore from "../../assets/download-on-appstore.png"
import exchange from "../../assets/technology-exchange.png"
import iolreference from "../../assets/technology-iolreference.png"
import outcome from "../../assets/technology-outcome.png"
import sulcus from "../../assets/technology-sulcus.png"
import transposition from "../../assets/technology-transposition.png"

const TechnologyCard = ({ title, content, collaborators, image }) => {
    if (title === "Eyespace App") {
        return (
            <div id="blog-card">
                <div id="article" className="technology-right-align">
                    <div>
                        <img className="technology-card-img" src={image} alt={title} />
                    </div>
                    <div id="blog-detail">
                        <div id="blog-content">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}
                        </div>
                    </div>
                </div>
                <a href="https://apps.apple.com/us/app/eye-space/id1626671895" target="_blank" rel="noopener noreferrer">
                    <img className="technology-appstore-img" src={appstore} alt="Download On Appstore" />
                </a>
                <div className="eyespace-card-container">
                    {/* Card components for different features of the app */}
                    {createCard("IOL Reference", iolreference, "Browse the entire spectrum of current FDA approved IOLs and find the right lens for any case using a novel search function. This is the ONLY accurate and current source one FDA approved IOL information.")}
                    {createCard("Transposition Tool", transposition, "Easily transpose between positive and negative cylinder.")}
                    {createCard("Sulcus Correction Tool", sulcus, "Quickly perform adjustments to select the correct IOL power when moving an IOL from the capsule to the sulcus.")}
                    {createCard("Refractive Outcome Tracking", outcome, "This is a state of the art outcome tracking utility that analyzes your cataract cases to learn more about refractive outcomes, surgically induced astigmatism, and personalized A-constants. This feature is currently only available in the app but will have a web interface soon.")}
                    {createCard("eyeSpace Exchange", exchange, "Connect with colleagues, mentors, and mentees to discuss cases, gather wisdom, and gain support.")}
                    {createCard("inSight", exchange, "Read and submit short articles to stay up to date and keep others current on new technological advances in ophthalmology.")}
                </div>
            </div>
        );
    } else {
        return (
            <div id="blog-card">
                <div id="article">
                    <img className="technology-card-img" src={image} alt={title} />
                    <div id="blog-detail">
                        <div id="blog-content">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}
                            <br /><br />
                            <strong>Collaborators:</strong> {collaborators}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const createCard = (title, imgSrc, content) => (
    <div className="eyespace-card">
        <div className="eyespace-card-title">{title}</div>
        <img className="eyespace-card-img" src={imgSrc} alt={title} />
        <div className="eyespace-card-content">
            {content}
            <br /><br /><br /><br />
        </div>
    </div>
);

TechnologyCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    collaborators: PropTypes.string,
    image: PropTypes.string,
};

export default TechnologyCard;

