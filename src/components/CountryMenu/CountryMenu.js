import React, { Component } from "react";

export default class CountryMenu extends Component {
  constructor() {
    super();
    this.state = {
      countries: [
        "ae",
        "ar",
        "at",
        "au",
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za",
      ],
    };
  }
  render() {
    return (
      <>
        <ul
          className="dropdown-menu"
          style={{ height: "60vh", overflowY: "scroll" }}
        >
          <li
            className="dropdown-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.props.onSearchCountry("globe");
            }}
          >
            <i className="fa fa-globe" style={{ marginRight: "10px" }}></i>
            Globe
          </li>
          {this.state.countries.map((country) => {
            return (
              <li
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.props.onSearchCountry(country);
                }}
              >
                <i
                  className={`flag-icon flag-icon-${country}`}
                  style={{ marginRight: "10px" }}
                ></i>
                {country.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
