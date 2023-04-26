import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// be sure to import the css file!

export default class Homepage extends React.Component {
    render() {
      return (
        <div className="homepage">
          {/** This is where you use the component that you used. Simply type the component name inside of <ComponentName/> */}
          
          <Header page="Home"/>
          <Footer/>
        </div>
      );
    }
  }