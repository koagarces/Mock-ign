import {
  defaultVideoState,
  VideoAction,
  VideoState,
} from "../redux-types/videos";

export const videoReducer = (
  state: VideoState = defaultVideoState,
  action: VideoAction
): VideoState => {
  switch (action.type) {
    case "IGN-API/set-active-video":
      return { ...state, activeVideo: action.video };
    case "IGN-API/set-videos":
      return {
        ...state,
        videoList: action.videoList,
        activeVideo: action.videoList[0],
      };
  }
  return state;
};
