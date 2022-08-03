// import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
// import NewsPage from "./components/NewsPage/NewsPage";
import NewsSection from "./components/NewsSection/NewsSection";
import Home from "./components/Home/Home";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar title="News Prey" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/business"
            element={
              <NewsSection
                key={"business"}
                title="Business"
                category="business"
                pageSize="21"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <NewsSection
                key={"entertainment"}
                title="Entertainment"
                category="entertainment"
                pageSize="21"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <NewsSection
                key={"technology"}
                title="Technology"
                category="technology"
                pageSize="21"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <NewsSection
                key={"sports"}
                title="Sports"
                category="sports"
                pageSize="21"
              />
            }
          />
          <Route
            path="/general"
            element={
              <NewsSection
                key={"general"}
                title="General"
                category="general"
                pageSize="21"
              />
            }
          />
          <Route
            path="/health"
            element={
              <NewsSection
                key={"health"}
                title="Health"
                category="health"
                pageSize="21"
              />
            }
          />
          <Route
            path="/science"
            element={
              <NewsSection
                key={"science"}
                title="Science"
                category="science"
                pageSize="21"
              />
            }
          />
        </Routes>
        <Footer />
      </>
    );
  }
}
