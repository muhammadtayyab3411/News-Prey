// import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
import NewsSection from "./components/NewsSection/NewsSection";
import Home from "./components/Home/Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: null,
      searchCountry: "globe",
      progress: 0,
    };
  }

  pageSize = 21; // Change the pageSize to show your desired number of newsItems per page.

  onSearch = async (query) => {
    await this.setState({ searchQuery: query });
  };

  onSearchCountry = async (country) => {
    await this.setState({ searchCountry: country });
  };

  setProgress = async (progress) => {
    await this.setState({ progress: progress });
  };

  render() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    return (
      <>
        <Navbar
          key={this.state.searchCountry}
          title="News Prey"
          onSearch={this.onSearch}
          country={this.state.searchCountry}
          onSearchCountry={this.onSearchCountry}
        />
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <Routes>
          <Route
            path="/"
            element={<Home setProgress={this.setProgress} apiKey={apiKey} />}
          />
          <Route
            path="/business"
            element={
              <NewsSection
                apiKey={apiKey}
                setProgress={this.setProgress}
                key={[
                  this.state.searchQuery,
                  "business",
                  this.state.searchCountry,
                ]}
                title="Business"
                category="business"
                pageSize={this.pageSize}
                onSearch={this.onSearch}
                searchQuery={this.state.searchQuery}
                country={this.state.searchCountry}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <NewsSection
                apiKey={apiKey}
                setProgress={this.setProgress}
                key={[
                  this.state.searchQuery,
                  "entertainment",
                  this.state.searchCountry,
                ]}
                title="Entertainment"
                category="entertainment"
                pageSize={this.pageSize}
                onSearch={this.onSearch}
                searchQuery={this.state.searchQuery}
                country={this.state.searchCountry}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <NewsSection
                apiKey={apiKey}
                setProgress={this.setProgress}
                key={[
                  this.state.searchQuery,
                  "technology",
                  this.state.searchCountry,
                ]}
                title="Technology"
                category="technology"
                pageSize={this.pageSize}
                onSearch={this.onSearch}
                searchQuery={this.state.searchQuery}
                country={this.state.searchCountry}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <NewsSection
                apiKey={apiKey}
                setProgress={this.setProgress}
                key={[
                  this.state.searchQuery,
                  "sports",
                  this.state.searchCountry,
                ]}
                title="Sports"
                category="sports"
                pageSize={this.pageSize}
                onSearch={this.onSearch}
                searchQuery={this.state.searchQuery}
                country={this.state.searchCountry}
              />
            }
          />
          <Route
            path="/general"
            element={
              <NewsSection
                apiKey={apiKey}
                setProgress={this.setProgress}
                key={[
                  this.state.searchQuery,
                  "general",
                  this.state.searchCountry,
                ]}
                title="General"
                category="general"
                pageSize={this.pageSize}
                onSearch={this.onSearch}
                searchQuery={this.state.searchQuery}
                country={this.state.searchCountry}
              />
            }
          />
          <Route
            path="/health"
            element={
              <NewsSection
                apiKey={apiKey}
                setProgress={this.setProgress}
                key={[
                  this.state.searchQuery,
                  "health",
                  this.state.searchCountry,
                ]}
                title="Health"
                category="health"
                pageSize={this.pageSize}
                onSearch={this.onSearch}
                searchQuery={this.state.searchQuery}
                country={this.state.searchCountry}
              />
            }
          />
          <Route
            path="/science"
            element={
              <NewsSection
                apiKey={apiKey}
                setProgress={this.setProgress}
                key={[
                  this.state.searchQuery,
                  "science",
                  this.state.searchCountry,
                ]}
                title="Science"
                category="science"
                pageSize={this.pageSize}
                onSearch={this.onSearch}
                searchQuery={this.state.searchQuery}
                country={this.state.searchCountry}
              />
            }
          />
        </Routes>
        <Footer />
      </>
    );
  }
}
