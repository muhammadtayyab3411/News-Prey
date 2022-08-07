import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      articles: null,
      category: this.props.category,
      page: 1,
      maxPages: null,
      totalResults: null,
    };
  }

  async componentDidMount() {
    let apiKey = this.props.apiKey;
    this.setState({ isLoading: true });
    let category = this.state.category;
    let page = this.state.page;
    let pageSize = this.props.pageSize;
    let searchQuery = this.props.searchQuery;
    let country =
      this.props.country !== undefined
        ? this.props.country !== "globe"
          ? this.props.country
          : ""
        : "";
    let url = category
      ? `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}&country=${
          country && country
        }`
      : `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&pageSize=${pageSize}&country=${country}`;

    let urlWithQuery = !country
      ? searchQuery &&
        `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`
      : `https://newsapi.org/v2/top-headlines?q=${searchQuery}&language=en&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}&country=${country}`;

    (category || searchQuery || country) && this.props.setProgress(10);
    let data = !searchQuery ? await fetch(url) : await fetch(urlWithQuery);
    (category || searchQuery || country) && this.props.setProgress(40);
    let news = await data.json();
    (category || searchQuery || country) && this.props.setProgress(60);
    this.setState({
      articles: news.articles,
      isLoading: false,
      totalResults: news.totalResults,
    });
    this.setState({ maxPages: Math.floor(100 / 21) });
    (category || searchQuery || country) && this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let apiKey = this.props.apiKey;
    let category = this.state.category;
    let page = this.state.page;
    let pageSize = this.props.pageSize;
    let searchQuery = this.props.searchQuery;
    let country = this.props.country !== "globe" ? this.props.country : "";
    let url = category
      ? `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`
      : `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&pageSize=${pageSize}`;

    let urlWithQuery = !country
      ? searchQuery &&
        `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`
      : `https://newsapi.org/v2/top-headlines?q=${searchQuery}&language=en&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}&country=${country}`;

    console.log(urlWithQuery);
    let data = !searchQuery ? await fetch(url) : await fetch(urlWithQuery);
    let news = await data.json();

    this.setState({ articles: this.state.articles.concat(news.articles) });
  };
  render() {
    return (
      <div
        className="container container-fluid"
        style={
          (this.props.category ? { marginTop: "5rem" } : { marginTop: "3rem" },
          { minHeight: "60vh" })
        }
      >
        <h2
          className="text-center"
          style={{
            fontSize: "2.5rem",
            fontFamily: "'Ubuntu', sans-serif",
            marginTop: `${this.props.pageSize === "6" ? "2rem" : "6rem"}`,
          }}
        >
          {!this.props.searchQuery ? this.props.title : this.props.searchQuery}
        </h2>
        {this.state.isLoading && <Spinner />}
        {this.state.totalResults === 0 && (
          <div
            className="container text-center text-muted "
            style={{ marginTop: "10rem", fontSize: "1.2rem" }}
          >
            No results found
          </div>
        )}
        <InfiniteScroll
          dataLength={this.state.articles && this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.articles &&
            this.state.articles.length !== this.state.totalResults &&
            this.state.page !== 4 &&
            this.state.articles &&
            this.props.pageSize === 21 &&
            this.state.articles.length !== 99
          }
          loader={<Spinner />}
          endMessage={
            this.state.page === 4 && (
              <div className="container text-center text-muted my-3">
                --------- End of results ---------
              </div>
            )
          }
        >
          <div className="container row d-flex justify-content-center">
            {this.state.articles &&
              this.state.articles.map((newsElement, index) => {
                return (
                  <NewsItem
                    key={newsElement.url}
                    title={
                      newsElement.title && newsElement.title
                        ? newsElement.title.slice(0, 51)
                        : ""
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
                    publishedAt={newsElement.publishedAt}
                    source={newsElement.source.name}
                  />
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
