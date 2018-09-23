import {combineReducers} from "redux";
import imagesReducer from "./imageReducer";
import userReducer from "./userReducer";

export default combineReducers({imagesReducer, userReducer});
