import React, { useEffect, useState } from "react";
import { TopBar, SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

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
            <h2 className="text-white top-heading">
              <span className="fw-bold">{selectedCategory}</span>{" "}
              <span className="text-danger">Videos</span>
            </h2>
            <div className="">
              <Videos videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
