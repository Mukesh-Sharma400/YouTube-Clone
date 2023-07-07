import React from "react";
import { VideoCard, ChannelCard, Loading } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loading />;
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {videos.map((item, id) => (
        <div className="m-auto" key={id}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
