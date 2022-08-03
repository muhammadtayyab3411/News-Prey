import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner.js";

export default class NewsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      articles: null,
      category: this.props.category,
      page: 1,
      maxPages: null,
    };
  }

  async componentDidMount() {
    let apiKey = "6d635dbadf3e4c50b3dd162100969cdb";
    this.setState({ isLoading: true });
    let category = this.state.category;
    let page = this.state.page;
    let pageSize = this.props.pageSize;
    let url = category
      ? `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`
      : `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&pageSize=${pageSize}`;

    let data = await fetch(url);
    let news = await data.json();

    this.setState({ articles: news.articles, isLoading: false });
    this.setState({ maxPages: Math.floor(100 / 21) });
  }

  handlePreviousClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.componentDidMount();
  };

  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.componentDidMount();
  };

  render() {
    return (
      <div
        className="container container-fluid"
        style={
          this.props.category ? { marginTop: "5rem" } : { marginTop: "3rem" }
        }
      >
        <h2
          className="text-center"
          style={{ fontSize: "2.5rem", fontFamily: "'Ubuntu', sans-serif" }}
        >
          {this.props.category ? this.props.title : "Latest News"}
        </h2>
        {this.state.isLoading && <Spinner />}
        <div className="container row d-flex justify-content-center">
          {!this.state.isLoading &&
            this.state.articles &&
            this.state.articles.map((newsElement, index) => {
              return (
                <NewsItem
                  key={newsElement.url}
                  title={
                    newsElement.title ? newsElement.title.slice(0, 51) : ""
                  }
                  description={
                    newsElement.description
                      ? newsElement.description.slice(0, 110)
                      : ""
                  }
                  urlToImage={
                    newsElement.urlToImage
                      ? newsElement.urlToImage
                      : "https://images.news18.com/ibnlive/uploads/2022/08/earth-rotation-165942509416x9.png"
                  }
                  urlToNews={newsElement.url}
                />
              );
            })}
        </div>
        {this.props.pageSize > 6 ? (
          <div
            className="container d-flex mty-4 justify-content-around"
            style={{ marginTop: "4rem" }}
          >
            <button
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={this.state.page >= this.state.maxPages}
              className="btn btn-primary"
              onClick={this.handleNextClick}
            >
              Next &rarr;{" "}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
