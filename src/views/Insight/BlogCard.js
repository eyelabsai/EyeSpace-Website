import React from 'react';
import PropTypes from 'prop-types';
import './BlogCard.css';

const BlogCard = ({ title, content, date, image }) => {
  return (
    <div className="exchange-blog-card">
      <div className="exchange-article">
        <img className="exchange-card-img" src={image} alt={title}/>
        <div className="exchange-blog-title">{title}</div>
        <div className="exchange-blog-detail">
          <div className="exchange-blog-content">{content}</div>
          <div className="exchange-blog-date">Date: {date}</div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
};

export default BlogCard;
