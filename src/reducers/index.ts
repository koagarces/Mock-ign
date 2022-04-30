import { combineReducers } from "redux";
import { videoReducer } from "./videos";

const rootReducer = combineReducers({ videos: videoReducer });

export default rootReducer;
