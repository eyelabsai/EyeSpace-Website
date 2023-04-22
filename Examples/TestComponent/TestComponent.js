import React from "react";
import PropTypes from "prop-types"; 
import './TestComponent.css'; // replace "TestComponent" with your own component

export default class TestComponent extends React.Component { // replace "TestCOmponent" with your own component
  static propTypes = { // define any props here
    name: PropTypes.string,
  };

  render() {
    return (
    <div className="cards">
      Component renders correctly! (Delete this once you start working)
      {/** start your html here! (delete this whole line, including the {}) */}
    </div>
    );
  }
}

