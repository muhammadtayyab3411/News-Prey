import React from "react";

export default function NewsItem(props) {
  let { title, description, urlToImage, urlToNews, publishedAt, source } =
    props;
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
        <div
          className="d-flex"
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-start",
            position: "absolute",
            right: "0",
            top: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{ left: "19%", fontSize: ".8rem" }}
          >
            {source ? source : "Unknown"}
          </span>
        </div>
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
            {title ? title : "No title..."}
          </h5>
          <p className="card-text">
            {description ? description : "No description..."}
          </p>
          <p className="card-text">
            <small className="text-muted">
              {publishedAt
                ? new Date(publishedAt).toUTCString()
                : new Date().toUTCString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={
              urlToNews ? urlToNews : window.alert("No link found to this news")
            }
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
