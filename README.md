Masashi Schafer
Starter Project

About:
Starter project that will be used to build a web app that uses React, Express,
Babel, Webpack, and Redux.

Setup
---
npm install

Compile
---
npm run compile

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
