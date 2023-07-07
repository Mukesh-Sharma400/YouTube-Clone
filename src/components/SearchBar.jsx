import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      navigate("/");
    }
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        name={searchTerm}
        className="form-control rounded-start-pill bg-black"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon"
        onKeyDown={handleKeyPress}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <span
        className="input-group-text rounded-end-pill pointer"
        id="basic-addon"
        onClick={handleSubmit}
      >
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
};

export default SearchBar;
