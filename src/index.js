import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

import {combineReducers} from "redux";

//Import all needed reducers here!-------------

//---------------------------------------------

export default combineReducers({
  //list reducers here for export in store.js
  
})

render(<App/>,document.getElementById('app'));
