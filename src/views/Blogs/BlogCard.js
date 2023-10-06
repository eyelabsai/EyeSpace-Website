import React from "react";
import PropTypes from "prop-types"; 
import './BlogCard.css';

export default class BlogCard extends React.Component {
    static propTypes = { // define any props here
        title: PropTypes.string, // title of the blog
        content: PropTypes.string, // snippet of the blog
        date: PropTypes.string, // date of the blog
        image: PropTypes.string, // image of the blog
    };

  render() {
    return (
        <div id = "blog-card">
            <div id = "article">
                <div id="blog-detail">
                    <div id="blog-title">{this.props.title}</div>
                    <div id="blog-content">{this.props.content}</div>
                    <div id="blog-date">{this.props.date}</div>
                </div>
                  <img id="blog-img" className="card-img" src={this.props.image} alt={this.props.title}/>
            </div>
        </div>
    );
  }
}