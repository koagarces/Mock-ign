import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getVideoList, setActiveVideo } from "../actions/videos";
import RootState from "../redux-types";
import { IGNVideo } from "../types/ign-api/ignVideo";

const selector = (state: RootState) => ({
  videoList: state.videos.videoList,
});

interface VideoCardProps {
  video: IGNVideo;
}

const VideoContainter = styled.button`
  width: 200px;
  height: 100px;
`;

const VideoListContainer = styled.div`
  padding-left: 200px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const dispatch = useDispatch();

  const setVideo = () => dispatch(setActiveVideo(video));

  return (
    <VideoContainter onClick={setVideo}>
      <div>{video.metadata.title}</div>
      <Image src={video.thumbnails[0].url} />
    </VideoContainter>
  );
};

const VideoList: React.FC = () => {
  const { videoList } = useSelector(selector);
  const dispatch = useDispatch();
  //@ts-ignore
  const getVideos = () => dispatch(getVideoList());

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideoListContainer>
      {videoList.map((video) => (
        <div>
          <VideoCard video={video} />
        </div>
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
