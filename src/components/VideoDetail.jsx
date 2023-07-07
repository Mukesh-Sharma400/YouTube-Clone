import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { TopBar, SideBar, Videos, Loading } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = ({ selectedCategory, setSelectedCategory }) => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loading />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="mtt">
      <div className="bg-black">
        <div className="topbar">
          <TopBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="row m-auto">
          <div className="col-2 sidebar">
            <div className="fixed-bottom">
              <SideBar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>
          <div className="col-xl-10 feed p-0">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="sticky-top">
                  <div className="mb-2">
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${id}`}
                      controls
                    />
                  </div>
                  <h5 className="text-white mb-1">{title}</h5>
                  <Link
                    className="text-decoration-none text-white mb-1"
                    to={`/channel/${channelId}`}
                  >
                    {channelTitle} <i className="bi bi-check-circle-fill"></i>
                  </Link>
                  <p className="mb-1">
                    {parseInt(likeCount).toLocaleString()} likes
                  </p>
                  <p className="mb-1">
                    {parseInt(viewCount).toLocaleString()} views
                  </p>
                </div>
              </div>
              <div className="col-4 side-videos">
                <Videos videos={videos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
