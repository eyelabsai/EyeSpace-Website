import React from "react";
import PropTypes from "prop-types";
import './TechnologyCard.css';
import appstore from "../../assets/appstore.svg";

export default class BlogCard extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.string,
        image: PropTypes.string,
    };

    render() {
        const { title, content, date, image } = this.props;

        // Check if the title is "Eyespace App"
        if (title === "Eyespace App") {
            return (
                <div id="blog-card">
                    <div id="article">
                        <div id="blog-detail">
                            <div id="blog-title">{title}</div>
                            <div id="blog-content">{content}</div>
                            <div id="blog-date">{date}</div>
                        </div>
                        <div>
                        <img id="blog-img" className="card-img" src={image} alt={title} />
                        <div className="bottomblock">
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
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            // Render a different block for other blog titles
            return (
                <div id="blog-card">
                    <div id="article">
                        <div id="blog-detail">
                            <div id="blog-title">{title}</div>
                            <div id="blog-content">{content}</div>
                            <div id="blog-date">{date}</div>
                        </div>
                        <img id="blog-img" className="card-img" src={image} alt={title} />
                    </div>
                </div>
            );
        }
    }
}
