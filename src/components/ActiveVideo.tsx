import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RootState from "../redux-types";

const selector = (state: RootState) => ({
  activeVideo: state.videos.activeVideo,
});

const ActiveVideoContainer = styled.video`
  width: 852px;
  height: 480px;
`;
const DescriptionContainer = styled.div`
  width: 380px;
  height: 400px;
`;

export const ActiveVideo: React.FC = () => {
  const dispatch = useDispatch();
  const { activeVideo } = useSelector(selector);

  if (!activeVideo) {
    return null;
  }
  console.log(activeVideo);

  return (
    <div>
      <ActiveVideoContainer controls>
        <source src={activeVideo.assets[3].url} type="video/mp4" />
      </ActiveVideoContainer>
      <DescriptionContainer>
        <h4> {activeVideo.metadata.description}</h4>
      </DescriptionContainer>
    </div>
  );
};
