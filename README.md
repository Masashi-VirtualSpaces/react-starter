Masashi Schafer
Starter Project

About:
Starter project that will be used to build a web app that uses React, Express,
Babel, Webpack, and Redux.

Setup
---
npm install

npm install express

npm install webpack

npm install webpack-dev-middleware

npm install babel-loader

npm install babel-core

npm install babel-plugin-transform-decorators-legacy

npm install babel-preset-latest

npm install react

npm install redux

npm install react-redux

npm install babel-loader

npm install babel-preset-react

npm install react-dom

npm redux-logger          //May not need

npm redux-thunk           //May not need

npm install redux-promise-middleware    //May not need

--------------------------------------------------------------------------------

Compile
---
npm run compile

--------------------------------------------------------------------------------

Start
---
npm start

Listens on localhost:3000

--------------------------------------------------------------------------------
This section describes the initial folder structures of the project. A short
description of each file is given.

Project structure:
src
|--actions: Folder that holds redux actions.
  |--functionTableAction.js     //Actions for function object in store.
  |--moduleTableAction.js       //Actions for module object in store.
  |--requirementTableAction.js  //Actions for requirement object in store.
  |
|--components: Folder that holds react components.
  |--Layout.js                  //React component acts as main layout of app.
  |
|--reducers: Folder that holds redux reducers.
  |--functionTableReducer.js    //Redux reducer for function object in store.
  |--Index.js                   //Combines all Redux reducers into one.
  |--moduleTableReducer.js      //Redux reducer for module object in store.
  |--requirementTableReducer.js //Redux reducer for requirement object in store.
  |
|client.js                      //Access point for Webpack.
|store.js                       //Declares information on Redux store.
www
|--index.html                   //Main html page for application.
package.json                    //Package configuration for application.
server.js                       //server configuration for application.
webpack.config.js               //Webpack configuration for application.
