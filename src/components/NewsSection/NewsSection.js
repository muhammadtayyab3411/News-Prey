import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsSection(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState(null);
  const [category] = useState(props.category);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);

  const fetchData = async () => {
    let apiKey = props.apiKey;
    setIsLoading(true);
    let pageSize = props.pageSize;
    let searchQuery = props.searchQuery;
    let country =
      props.country !== undefined
        ? props.country !== "globe"
          ? props.country
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

    (category || searchQuery || country) && props.setProgress(10);
    let data = !searchQuery ? await fetch(url) : await fetch(urlWithQuery);
    (category || searchQuery || country) && props.setProgress(40);
    let news = await data.json();
    (category || searchQuery || country) && props.setProgress(60);

    setArticles(news.articles);
    setIsLoading(false);
    setTotalResults(news.totalResults);

    (category || searchQuery || country) && props.setProgress(100);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let apiKey = props.apiKey;
    let pageSize = props.pageSize;
    let searchQuery = props.searchQuery;
    let country = props.country !== "globe" ? props.country : "";
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

    setArticles(articles.concat(news.articles));
  };

  return (
    <div
      className="container container-fluid"
      style={
        (props.category ? { marginTop: "5rem" } : { marginTop: "3rem" },
        { minHeight: "60vh" })
      }
    >
      <h2
        className="text-center"
        style={{
          fontSize: "2.5rem",
          fontFamily: "'Ubuntu', sans-serif",
          marginTop: `${props.pageSize === "6" ? "2rem" : "6rem"}`,
        }}
      >
        {!props.searchQuery ? props.title : props.searchQuery}{" "}
        {props.country !== "globe" && (
          <i className={`flag-icon flag-icon-${props.country}`}></i>
        )}
      </h2>
      {isLoading && <Spinner />}
      {totalResults === 0 && (
        <div
          className="container text-center text-muted "
          style={{ marginTop: "10rem", fontSize: "1.2rem" }}
        >
          No results found
        </div>
      )}
      <InfiniteScroll
        dataLength={articles && articles.length}
        next={fetchMoreData}
        hasMore={
          articles &&
          articles.length !== totalResults &&
          page !== 4 &&
          articles &&
          props.pageSize === 21 &&
          articles.length !== 99
        }
        loader={<Spinner />}
        endMessage={
          page === 4 && (
            <div className="container text-center text-muted my-3">
              --------- End of results ---------
            </div>
          )
        }
      >
        <div className="container row d-flex justify-content-center">
          {articles &&
            articles.map((newsElement, index) => {
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
