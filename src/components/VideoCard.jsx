import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div
      className="m-auto card border-0 bg-black"
      style={{ width: "15rem" }}
      key={videoId}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <img
          className="card-img rounded-3 mb-1"
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
        />
      </Link>
      <Link
        className="text-white text-decoration-none bg-black"
        to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
      >
        <p className="video-title mb-0">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </p>
      </Link>
      <Link
        className="text-white-50 text-decoration-none"
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <p className="video-channel mb-0">
          {snippet?.channelTitle || demoChannelTitle}{" "}
          <i className="bi bi-check-circle-fill"></i>
        </p>
      </Link>
    </div>
  );
};

export default VideoCard;
