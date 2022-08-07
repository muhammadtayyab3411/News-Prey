import React from "react";

export default function HeroSection() {
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
            <div className="maintext">
              <h1
                style={{
                  textShadow: "2px 2px 2px black",
                  fontSize: "3.4rem",
                  fontFamily: "'Ubuntu', sans-serif",
                  color: "rgb(255 255 255)",
                }}
              >
                <span
                  className=""
                  style={{
                    color: "white",
                    mixBlendMode: "multiply",
                    backgroundColor: "#0f2c56",
                    padding: "5px 12px",
                  }}
                >
                  News Prey
                </span>{" "}
                - Hunt theNews
                <br /> around the Globe
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
        className="img-fluid w-100"
        style={{
          height: "85vh",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: "0.7",
          zIndex: -1,
        }}
        alt="..."
      ></img>
    </>
  );
}
