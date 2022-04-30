import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";
import { Video } from "./components/Video";
import Loader from "./components/Loader";

const StyledButton = styled.button`
  width: 200px;
  height: 80px;
  background-color: blue;
`;
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Loader />
        <Video />
      </div>
    </Provider>
  );
}

export default App;
