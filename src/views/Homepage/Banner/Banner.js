import React from "react";
import PropTypes from "prop-types"; 
import './Banner.css'; // replace "TestComponent" with your own component
import appstore from "../../../assets/appstore.svg"
import iphone from "../../../assets/iphone.svg"

export default class Banner extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="banner">
        <div className="right">
            <img src={iphone} width="300px" alt="phone"></img>
        </div>
        <div className="left">
            <div className="title">
                <p>eyeSpace<br />Opthamology</p>
            </div>
            <div className="desc">
                <p>Welcome to the future of integrated ophthalmic surgery</p>
            </div>
            <div className="bottomblock">
                <a href="appstore://" className="download">
                    <div className="downloadpad">
                        <img id="downloadpic" src={appstore} width="30px" alt="App Store logo"></img>
                        <span id="downloadtext"> Download The App</span>
                    </div>
                </a>
                <table className="stats">
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
                </table>
            </div>
        </div>
    </div>
    );
  }
}