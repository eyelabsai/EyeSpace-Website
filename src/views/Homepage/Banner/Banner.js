import React from "react";
import PropTypes from "prop-types"; 
import './Banner.css'; // replace "TestComponent" with your own component
// import appstore from "../../../assets/appstore.svg"
import iphone from "../../../assets/Home Page Graphic.svg"
// import Bckg from "../../../assets/eyespaceNewlogo.svg";


export default class Banner extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="banner">
      {/* <div  className="contact-div" style={{backgroundImage: `url(${Bckg})`}}> */}
        <div className="left">
            <div className="banner-title">
                <strong>EYESPACE Ophthalmology</strong>
            </div>
            <div className="desc">
                <p>Welcome to the future of integrated ophthalmic surgery. EYESPACE is a technology company 
                    and consulting firm that specializes in delivering innovative and AI-based solutions
                     to problems facing surgeons and patients to improve outcomes and positively impact the field of ophthalmology.</p>
            </div>
            {/* <div className="bottomblock">
                <a href="appstore://" className="download">
                    <div className="downloadpad">
                        <table className="button-info">
                            <tbody>
                                <tr>
                                    <td><img id="downloadpic" src={appstore} width="30px" alt="App Store logo"></img></td>
                                    <td><span id="downloadtext"> Download The App</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </a>
                <table className="stats">
                    <tbody>
                        <tr className="topstats">
                            <td>
                                <div className="stars">
                                    <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span>
                                </div>
                            </td>
                            <td>
                                50+
                            </td>
                            <td>
                                1000+
                            </td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>Countries</td>
                            <td>Downloads</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </div>
        <div className="right">
            <img src={iphone} width="575px" alt="phone"></img>
        </div>
    </div>
//   </div>
    
    );
  }
}