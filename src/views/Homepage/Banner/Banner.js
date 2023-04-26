import React from "react";
import PropTypes from "prop-types"; 
import './Banner.css'; // replace "TestComponent" with your own component

export default class Banner extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="banner">
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
                        <img src="" alt="App Store logo"></img>
                        <span> Download The App</span>
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