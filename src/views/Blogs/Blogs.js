import React from "react";
import PropTypes from "prop-types"; 
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import './Blogs.css'; 

export default class Blogs extends React.Component { 
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="cards">
      <Header page="Blogs"/>
      <h1>Blogs</h1>
      <Footer/>
    </div>
    );
  }
}

