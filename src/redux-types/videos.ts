import { IGNVideo } from "../types/ign-api/ignVideo";

export interface VideoState {
  activeVideo: null | IGNVideo;
  videoList: IGNVideo[];
}

export interface SetVideosAction {
  type: "IGN-API/set-videos";
  videoList: IGNVideo[];
}

export interface SetActiveVideoAction {
  type: "IGN-API/set-active-video";
  video: IGNVideo;
}

export type VideoAction = SetVideosAction | SetActiveVideoAction;

export const defaultVideoState: VideoState = {
  activeVideo: null,
  videoList: [],
};
