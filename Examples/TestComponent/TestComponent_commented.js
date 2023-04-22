// This is the commented version of TestComponent.js. This won't be needed inside your component folder

import React from "react";
import PropTypes from "prop-types"; 
import './TestComponent.css'; // replace "TestComponent" with your own component

export default class TestComponent extends React.Component { // replace "TestCOmponent" with your own component
  // This portion defines all the types that the prop variables will be
  // props variables are essentially data you can pass from parent components to the child component (here)
  // Information on Props: https://www.w3schools.com/react/react_class.asp
  // Information on propTypes: https://www.npmjs.com/package/prop-types
  static propTypes = {
    name: PropTypes.string,
  };

  
  // This is where you'll be coding the HTML. It goes inside the return()
  // Everything enclosed in {} will be treated as javascript
  render() {
    return (
    <div className="cards">
      TestComponent Component renders correctly! (Delete this once you start working)
      {/** start your html here! (delete this whole line, including the {}) */}
    </div>
    );
  }
}

