import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TopBar, Videos, ChannelCard, SideBar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = ({ selectedCategory, setSelectedCategory }) => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

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
            <div className="channel-background rounded-3"></div>
            <div className="d-flex justify-content-center">
              <ChannelCard channelDetail={channelDetail} marginTop="-50px" />
            </div>
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
