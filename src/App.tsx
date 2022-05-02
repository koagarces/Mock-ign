import React from "react";
import styled from "styled-components";
import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";
import VideoList from "./components/VideoList";
import { ActiveVideo } from "./components/ActiveVideo";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <ActiveVideo />
        <VideoList />
      </AppContainer>
    </Provider>
  );
}

export default App;
