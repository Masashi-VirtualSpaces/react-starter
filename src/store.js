import {applyMiddleware,createStore} from "redux";

import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducers";

//Applies middleware in order to log and check communication. May not need all
//of these. Look into removing some. Or add our own.
const middleware = applyMiddleware(promise(),thunk,createLogger());

export default createStore(reducer,middleware);
