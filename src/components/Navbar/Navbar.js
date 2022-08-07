// import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "flag-icon-css/css/flag-icons.css";
import CountryMenu from "../CountryMenu/CountryMenu";

export default function Navbar(props) {
  // const [country, setCountry] = useState("GLobe");
  const [search, setSearch] = useState();

  const handleSearchChange = async (e) => {
    await setSearch(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    props.onSearch(search);
  };

  return (
    <nav
      className="navbar fixed-top navbar-dark navbar-expand-lg"
      style={{
        fontFamily: "'Josefin Sans', sans-serif",
        backgroundColor: "#0f2c56",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <form
            className="form-control d-flex justify-content-end input-group"
            role="search"
            style={{
              width: "auto",
              backgroundColor: "#0f2c56",
              border: "none",
            }}
          >
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                borderColor: "#93a0b3",
                color: "#f8f9fa",
              }}
            >
              <i
                className={
                  props.country === "globe"
                    ? `fa fa-${props.country}`
                    : `flag-icon flag-icon-${props.country}`
                }
                style={{ marginRight: "10px" }}
              ></i>
              {props.country ? props.country.toUpperCase() : "Globe"}
            </button>
            <CountryMenu onSearchCountry={props.onSearchCountry} />
            <input
              className=" me-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
              aria-label="Search"
              style={{
                backgroundColor: "transparent",
                color: "#f8f9fa",
                border: "1px solid #93a0b3",
                borderRadius: "2px",
                outline: "none",
              }}
            />
            <button className="btn btn-success" onClick={handleSearchClick}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
