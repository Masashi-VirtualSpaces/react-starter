//This file handles the reducers for Redux.
import {combineReducers} from "redux";

//Import all needed reducers here!-------------
import functionReducer from "./functionTableReducer";
import moduleReducer from "./moduleTableReducer";
import requirementReducer from "./requirementTableReducer";
//---------------------------------------------

export default combineReducers({
  //list reducers here for access in store.js
  functionReducer,
  moduleReducer,
  requirementReducer,
})
