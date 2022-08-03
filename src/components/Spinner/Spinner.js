import React, { Component } from "react";
import loadingSpinner from "./Spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <img
            src={loadingSpinner}
            alt="loading"
            className="text-center"
            width={"70px"}
            height={"70px"}
            style={{ marginTop: "5rem" }}
          />
        </div>
      </>
    );
  }
}
