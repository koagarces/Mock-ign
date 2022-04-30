import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../redux-types";

const selector = (state: RootState) => ({
  activeVideo: state.videos.activeVideo,
  videoList: state.videos.videoList,
});

export const Video: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector(selector);
  console.log(state);

  return <div>my videos</div>;
};
