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
        <div className = "blog-card">
            <div className = "article">
              <img className="card-img" src={this.props.image} alt={this.props.title}/>
              <div className="blog-title">{this.props.title}</div>
              <div className="blog-detail">
                <div className="blog-content">{this.props.content}</div>
                <div className="blog-date">Date: {this.props.date}</div>
              </div>    
            </div>
        </div>
    );
  }
}