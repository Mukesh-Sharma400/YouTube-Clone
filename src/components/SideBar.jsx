import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-black"
      style={{ width: "17%", height: "87.5vh", overflowY: "scroll" }}
    >
      <span className="fs-5">Explore</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {categories.map((category) => (
          <li
            className="nav-item"
            key={category.name}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
          >
            <p
              className="nav-link text-white mb-2"
              style={{
                background: category.name === selectedCategory && "#dc3545",
                fontWeight: category.name === selectedCategory && "bold",
              }}
            >
              {category.icon} &nbsp; {category.name}
            </p>
          </li>
        ))}
      </ul>
      <hr />
      <div className="text-center">
        <a
          href="https://mukesh-sharma.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-danger"
        >
          <strong>Mukesh Sharma</strong>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
