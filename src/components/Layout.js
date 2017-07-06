import React from "react";
import {connect} from "react-redux"; //Connects the store to application.

import {addFunction} from "../actions/functionTableAction";

//Connects to store in order to grab needed info. This is a smart component.
@connect((store) => {
  return{
    myFunctionName: store.functionReducer.functionName,
  };
})

export default class Layout extends React.Component{
  render(){
    const {myFunctionName} = this.props;

    return(
      <div>
        <h1>
        Hello World! Here is a project for React with Redux already set up!
        </h1>
        <h1>
        {myFunctionName}
        </h1>
      </div>
    );
  }
}
