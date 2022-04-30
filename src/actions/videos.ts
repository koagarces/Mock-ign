import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { BASE_URL } from "../constants/ign-api-baseurl";
import RootState from "../redux-types";
import { SetActiveVideoAction, SetVideosAction } from "../redux-types/videos";
import { IGNVideo, IGNVideoApiResponse } from "../types/ign-api/ignVideo";

export const setVideos = (videos: IGNVideo[]): SetVideosAction => {
  return {
    type: "IGN-API/set-videos",
    videoList: videos,
  };
};

export const setActiveVideo = (video: IGNVideo): SetActiveVideoAction => {
  return {
    type: "IGN-API/set-active-video",
    video: video,
  };
};

export const getVideoList = (): ThunkAction<
  Promise<void>,
  RootState,
  {},
  SetVideosAction
> => {
  return async (dispatch) => {
    try {
      const res: { data: IGNVideoApiResponse } = await axios.get(
        `${BASE_URL}/videos`
      );
      dispatch(setVideos(res.data.data));
    } catch (error) {}
  };
};
