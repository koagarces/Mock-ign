import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getVideoList } from "../actions/videos";

const StyledButton = styled.button`
  width: 200px;
  height: 80px;
  background-color: blue;
`;

const Loader: React.FC = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const getVideos = () => dispatch(getVideoList());

  return <StyledButton onClick={getVideos}>ign videos</StyledButton>;
};

export default Loader;
