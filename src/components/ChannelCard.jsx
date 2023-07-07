import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div className="card h-100 border-0 bg-black" style={{ width: "15rem" }}>
      <Link
        to={`/channel/${channelDetail?.id?.channelId}`}
        className="text-white text-decoration-none text-center m-auto"
      >
        <img
          className="card-img rounded-circle mb-2"
          src={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          style={{ height: "6rem", width: "6rem", marginTop: marginTop }}
        />
        <p>
          {channelDetail?.snippet?.title}{" "}
          <i className="bi bi-check-circle-fill"></i>
        </p>
        <p>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
            "en-US"
          )}{" "}
          Subscribers
        </p>
      </Link>
    </div>
  );
};

export default ChannelCard;
