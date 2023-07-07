import React from "react";
import { categories } from "../utils/constants";

const TopBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="pt-3">
      <div className="scrollmenu mb-3">
        <ul className="nav-pills ps-0 pb-0 mb-2">
          {categories.map((category) => (
            <li
              className="nav-item pb-0"
              key={category.name}
              onClick={() => {
                setSelectedCategory(category.name);
              }}
            >
              <p
                className="nav-link text-white mb-0 px-3 py-2 rounded-pill"
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
      </div>
    </div>
  );
};

export default TopBar;
