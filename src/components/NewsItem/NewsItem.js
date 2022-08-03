import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, urlToNews } = this.props;
    return (
      <>
        <div
          className="card mt-3 col-md-4 d-flex justify-content-center"
          style={{
            width: "18rem",
            margin: ".5rem",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          <img
            src={urlToImage}
            onError={(image) => {
              image.target.onError = null;
              image.target.src =
                "https://images.news18.com/ibnlive/uploads/2022/08/earth-rotation-165942509416x9.png";
            }}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "13rem", alignSelf: "center" }}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <a href={urlToNews} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
