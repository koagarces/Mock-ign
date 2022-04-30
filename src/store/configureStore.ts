import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import RootState from "../redux-types";
import initialState from "./initialState";

export const configureStore = (preloadedState: RootState = initialState) => {
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    //@ts-ignore
    preloadedState,
    applyMiddleware(...middleware)
  );
  return store;
};
