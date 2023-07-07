import React from "react";
import { Link } from "react-router-dom";
import small_logo from "../assets/small_logo.png";
import logo from "../assets/logo.png";
import { SearchBar } from "./";

const Navbar = () => {
  return (
    <div
      className="container-fluid fixed-top bg-black"
      style={{ zIndex: "999999999999999999999999999" }}
    >
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3">
        <div className="col-2 col-md-3">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none align-middle"
          >
            <img
              src={logo}
              className="img-fluid rounded-3 logo"
              alt="YouTube"
            />
            <img
              src={small_logo}
              className="img-fluid rounded-3 small_logo"
              alt="YouTube"
            />
          </Link>
        </div>
        <div className="nav col-9 col-sm-8 col-md-6 justify-content-center">
          <SearchBar />
        </div>
        <div className="col-md-3 text-end"></div>
      </header>
    </div>
  );
};

export default Navbar;
