import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"; //Adds

//Connects react entry
import Layout from "./components/Layout";
import store from "./store";

//Connects to index.html
const app = document.getElementById('app')

//Connects store and Layout to render.
ReactDOM.render(<Provider store={store}>
  <Layout/>
  </Provider>,app);
