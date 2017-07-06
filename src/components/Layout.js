import React from "react";
import {connect} from "react-redux"; //Connects the store to application.

//Connects to store in order to grab needed info. This is a smart component.
@connect((store) => {
  return null;
})

export default class Layout extends React.Component{
  render(){
    return(
      <h1>
      Hello World! Here is a project for React with Redux already set up!
      </h1>
    );
  }
}
