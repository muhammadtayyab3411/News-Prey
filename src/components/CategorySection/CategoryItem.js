import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CategoryItem extends Component {
  render() {
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
            src={this.props.imageUrl}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "13rem", alignSelf: "center" }}
          />
          <div className="card-body text-center">
            <h5
              className="card-title"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              {this.props.categoryTitle}
            </h5>
            <Link to={`/${this.props.category}`} className="btn btn-primary">
              Read News
            </Link>
          </div>
        </div>
      </>
    );
  }
}
