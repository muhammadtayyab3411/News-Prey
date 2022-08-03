import React, { Component } from "react";

export default class HeroSection extends Component {
  render() {
    return (
      <>
        <div
          className="container w-100"
          style={{
            height: "85vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="row">
            <div className=" col-centered">
              <div className="maintext text-primary">
                <h1
                  style={{
                    textShadow: "2px 2px 2px black",
                    fontSize: "3.4rem",
                    fontFamily: "'Ubuntu', sans-serif",
                  }}
                >
                  <span className="text-warning">News Prey</span> - Hunt theNews
                  <br /> around the Globe
                </h1>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          className="img-fluid w-100"
          style={{
            height: "85vh",
            position: "absolute",
            top: "0",
            left: "0",
            opacity: "0.9",
            zIndex: -1,
          }}
          alt="..."
        ></img>
      </>
    );
  }
}
