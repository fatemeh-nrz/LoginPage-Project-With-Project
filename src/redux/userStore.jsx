import { applyMiddleware } from "redux";

import logger from "redux-logger";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import userReducer from "./userReducer";
import { thunk } from "redux-thunk";
 


 
export const userStore=createStore(userReducer,composeWithDevTools (applyMiddleware(logger,thunk)));