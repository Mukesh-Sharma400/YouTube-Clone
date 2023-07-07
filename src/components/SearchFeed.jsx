import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopBar, SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

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
            <h2 className="text-white">
              {searchTerm} <span className="text-danger">Videos</span>
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

export default SearchFeed;
