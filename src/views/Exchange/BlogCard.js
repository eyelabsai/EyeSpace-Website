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
        <div className = "exchange-blog-card">
            <div className = "exchange-article">
              <img className="exchange-card-img" src={this.props.image} alt={this.props.title}/>
              <div className="exchange-blog-title">{this.props.title}</div>
              <div className="exchange-blog-detail">
                <div className="exchange-blog-content">{this.props.content}</div>
                <div className="exchange-blog-date">Date: {this.props.date}</div>
              </div>    
            </div>
        </div>
    );
  }
}